
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { OrderStatusTimeline } from './OrderStatusTimeline';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { format } from 'date-fns';
import { Order } from '@/types/order';

interface OrderCardProps {
  order: Order;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'confirmed':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'processing':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'shipped':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'delivered':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'failed':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'refunded':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Order #{order.order_number}</CardTitle>
            <CardDescription>
              Placed on {format(new Date(order.created_at), 'PPP')}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className={getStatusColor(order.status)}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
            <Badge className={getPaymentStatusColor(order.payment_status)}>
              Payment: {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">
              Total: ${Number(order.total_amount).toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">
              {order.order_items.length} item{order.order_items.length !== 1 ? 's' : ''}
            </span>
          </div>

          <OrderStatusTimeline currentStatus={order.status} updatedAt={order.updated_at} />

          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0">
                <span>View Order Details</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-4 mt-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Order Items</h4>
                <div className="space-y-3">
                  {order.order_items.map((item) => {
                    const itemData = item.products || item.services;
                    if (!itemData) return null;

                    return (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          {itemData.thumbnail_url && (
                            <img 
                              src={itemData.thumbnail_url} 
                              alt={itemData.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="font-semibold">
                          ${Number(item.total_price).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {order.notes && (
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Order Notes</h4>
                  <p className="text-sm text-muted-foreground">{order.notes}</p>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );
};
