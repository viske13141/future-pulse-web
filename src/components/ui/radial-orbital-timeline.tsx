"use client";
import { useState } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-primary border-primary";
      case "in-progress":
        return "text-primary bg-background border-primary";
      case "pending":
        return "text-muted-foreground bg-muted border-muted-foreground";
      default:
        return "text-muted-foreground bg-muted border-muted-foreground";
    }
  };

  return (
    <div className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {timelineData.map((item, index) => {
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  isLeft ? "justify-end" : "justify-start"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                    w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                    ${
                      isExpanded
                        ? "bg-primary text-primary-foreground scale-125"
                        : isRelated
                        ? "bg-primary/70 text-primary-foreground animate-pulse"
                        : "bg-background text-foreground border-2 border-primary/40"
                    }
                    transition-all duration-300 shadow-lg
                    ${isPulsing ? "animate-pulse" : ""}
                  `}
                  onClick={() => toggleItem(item.id)}
                >
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    isLeft ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div
                    className={`inline-block p-6 rounded-xl border shadow-lg cursor-pointer
                      ${
                        isExpanded
                          ? "bg-primary text-primary-foreground border-primary shadow-glow"
                          : "bg-card text-card-foreground border-border hover:shadow-glow hover:border-primary/50"
                      }
                      transition-all duration-300 max-w-md
                    `}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Date */}
                    <div className="text-sm font-mono mb-2 opacity-70">
                      {item.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                    {/* Status Badge */}
                    <Badge
                      className={`mb-4 ${getStatusStyles(item.status)}`}
                    >
                      {item.status === "completed"
                        ? "COMPLETED"
                        : item.status === "in-progress"
                        ? "IN PROGRESS"
                        : "PENDING"}
                    </Badge>

                    {/* Content */}
                    <p className="text-sm leading-relaxed mb-4 opacity-90">
                      {item.content}
                    </p>

                    {/* Energy Level */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="flex items-center">
                          <Zap size={12} className="mr-1" />
                          Energy Level
                        </span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
                          style={{ width: `${item.energy}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && item.relatedIds.length > 0 && (
                      <div className="pt-4 border-t border-current/20">
                        <div className="flex items-center mb-3">
                          <Link size={12} className="mr-2" />
                          <h4 className="text-xs uppercase tracking-wider font-medium">
                            Connected Milestones
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="h-7 px-3 py-0 text-xs bg-transparent hover:bg-background/50 transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight
                                  size={10}
                                  className="ml-1"
                                />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}