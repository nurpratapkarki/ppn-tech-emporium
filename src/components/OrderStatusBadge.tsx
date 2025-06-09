
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface OrderStatusBadgeProps {
  status: string;
  size?: 'sm' | 'default' | 'lg';
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'pending':
      return {
        color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        label: 'Pending'
      };
    case 'confirmed':
      return {
        color: 'bg-blue-100 text-blue-800 border-blue-200',
        label: 'Confirmed'
      };
    case 'processing':
      return {
        color: 'bg-purple-100 text-purple-800 border-purple-200',
        label: 'Processing'
      };
    case 'shipped':
      return {
        color: 'bg-orange-100 text-orange-800 border-orange-200',
        label: 'Shipped'
      };
    case 'delivered':
      return {
        color: 'bg-green-100 text-green-800 border-green-200',
        label: 'Delivered'
      };
    case 'cancelled':
      return {
        color: 'bg-red-100 text-red-800 border-red-200',
        label: 'Cancelled'
      };
    default:
      return {
        color: 'bg-gray-100 text-gray-800 border-gray-200',
        label: status.charAt(0).toUpperCase() + status.slice(1)
      };
  }
};

export const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ 
  status, 
  size = 'default' 
}) => {
  const config = getStatusConfig(status);
  
  return (
    <Badge 
      variant="outline" 
      className={`${config.color} ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : ''}`}
    >
      {config.label}
    </Badge>
  );
};
