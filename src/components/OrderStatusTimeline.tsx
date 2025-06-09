
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Check, Package, Truck, X } from 'lucide-react';
import { format } from 'date-fns';

interface OrderStatusTimelineProps {
  currentStatus: string;
  updatedAt: string;
}

const statusSteps = [
  { key: 'pending', label: 'Order Placed', icon: Package },
  { key: 'confirmed', label: 'Confirmed', icon: Check },
  { key: 'processing', label: 'Processing', icon: Package },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: Check },
];

const getStatusIndex = (status: string) => {
  const index = statusSteps.findIndex(step => step.key === status);
  return index === -1 ? 0 : index;
};

const getProgressPercentage = (status: string) => {
  if (status === 'cancelled') return 0;
  const currentIndex = getStatusIndex(status);
  return ((currentIndex + 1) / statusSteps.length) * 100;
};

export const OrderStatusTimeline: React.FC<OrderStatusTimelineProps> = ({ 
  currentStatus, 
  updatedAt 
}) => {
  const currentIndex = getStatusIndex(currentStatus);
  const progressPercentage = getProgressPercentage(currentStatus);
  const isCancelled = currentStatus === 'cancelled';

  if (isCancelled) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <X className="h-5 w-5 text-red-600" />
          <span className="font-medium text-red-800">Order Cancelled</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Last updated: {format(new Date(updatedAt), 'PPp')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Order Progress</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="relative">
        <div className="flex justify-between">
          {statusSteps.map((step, index) => {
            const isCompleted = index <= currentIndex;
            const isCurrent = index === currentIndex;
            const IconComponent = step.icon;

            return (
              <div key={step.key} className="flex flex-col items-center space-y-2">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                    ${isCompleted 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'bg-background border-muted-foreground text-muted-foreground'
                    }
                    ${isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''}
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className={`text-xs font-medium ${isCompleted ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Connecting lines */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted -z-10">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(currentIndex / (statusSteps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Last updated: {format(new Date(updatedAt), 'PPp')}
      </p>
    </div>
  );
};
