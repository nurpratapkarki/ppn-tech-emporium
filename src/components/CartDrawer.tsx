
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export function CartDrawer() {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();
  const { user } = useAuth();
  const cartCount = getCartCount();

  const handleCheckout = () => {
    if (!user) {
      toast.error('Please login to proceed with checkout');
      return;
    }
    
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    // Simulate checkout process
    toast.success('Checkout initiated! This will connect to your Django backend.');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="w-4 h-4" />
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cartCount} items)</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">${item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm font-medium px-2">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
              </div>
              <Button 
                className="w-full" 
                onClick={handleCheckout}
                disabled={!user}
              >
                {user ? 'Proceed to Checkout' : 'Login to Checkout'}
              </Button>
              {!user && (
                <p className="text-xs text-muted-foreground text-center">
                  Please login to complete your purchase
                </p>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
