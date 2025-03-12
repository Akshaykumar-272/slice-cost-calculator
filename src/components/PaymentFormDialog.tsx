
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, CreditCard } from "lucide-react";

interface PaymentFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentFormDialog = ({ isOpen, onClose }: PaymentFormDialogProps) => {
  const navigate = useNavigate();
  const [totalSlices, setTotalSlices] = useState("100");
  
  // Derived values based on total slices
  const costPerSlice = 0.25; // Example cost per slice
  const shapeCost = parseInt(totalSlices) * costPerSlice;
  const materialCost = shapeCost * 1.5; // Example material cost calculation
  const currentRequired = Math.ceil(parseInt(totalSlices) / 50); // Example calculation
  const labourRequired = Math.ceil(parseInt(totalSlices) / 75); // Example calculation
  const totalPayment = materialCost + (labourRequired * 20); // Example total calculation
  
  const handleProceedToPayment = () => {
    // Navigate to payment options page with the calculated values
    navigate("/payment-options", { 
      state: { 
        totalSlices,
        shapeCost,
        materialCost,
        currentRequired,
        labourRequired,
        totalPayment
      } 
    });
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Payment Details</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="total-slices">Total Slicing</Label>
            <Input
              id="total-slices"
              type="number"
              value={totalSlices}
              onChange={(e) => setTotalSlices(e.target.value)}
              min="1"
            />
          </div>
          
          <div className="grid gap-2">
            <Label>Shape & Cost per Slice</Label>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
              <span>Cost per slice: ${costPerSlice.toFixed(2)}</span>
              <span>|</span>
              <span>Shape cost: ${shapeCost.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Total Material Cost</Label>
            <div className="flex items-center gap-2 text-sm font-medium bg-gray-50 p-2 rounded">
              ${materialCost.toFixed(2)}
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Current Required</Label>
            <div className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
              {currentRequired} A
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label>Labour Requirement</Label>
            <div className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
              {labourRequired} {labourRequired === 1 ? 'person' : 'people'}
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-lg font-bold">
            <DollarSign className="w-5 h-5" />
            <span>Total: ${totalPayment.toFixed(2)}</span>
          </div>
          <Button 
            onClick={handleProceedToPayment}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            Proceed to Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentFormDialog;
