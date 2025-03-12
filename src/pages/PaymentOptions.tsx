
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, CreditCard, QrCode } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const PaymentOptions = () => {
  const location = useLocation();
  const paymentDetails = location.state || {
    totalSlices: 0,
    shapeCost: 0,
    materialCost: 0,
    currentRequired: 0,
    labourRequired: 0,
    totalPayment: 0,
  };

  const handlePaymentMethod = (method: string) => {
    // Simulate payment processing
    toast({
      title: "Payment Processing",
      description: `Processing ${method} payment of $${paymentDetails.totalPayment.toFixed(2)}`,
    });
    // In a real app, you would redirect to a payment processor or handle payment logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <Link
            to="/printing-config"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to configuration
          </Link>

          <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Select Payment Method</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 hover:border-primary hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Debit Card
                  </CardTitle>
                  <CardDescription>Pay using debit or credit card</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => handlePaymentMethod("card")}
                  >
                    Pay with Card
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="w-5 h-5" />
                    QR Code
                  </CardTitle>
                  <CardDescription>Scan and pay using mobile wallet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 aspect-square max-w-[200px] mx-auto flex items-center justify-center mb-4 rounded-md">
                    <QrCode className="w-20 h-20 text-gray-400" />
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handlePaymentMethod("QR code")}
                  >
                    I've Completed Payment
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-4">Payment Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Slices:</span>
                  <span>{paymentDetails.totalSlices}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shape Cost:</span>
                  <span>${paymentDetails.shapeCost?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Material Cost:</span>
                  <span>${paymentDetails.materialCost?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Required:</span>
                  <span>{paymentDetails.currentRequired} A</span>
                </div>
                <div className="flex justify-between">
                  <span>Labour:</span>
                  <span>{paymentDetails.labourRequired} {paymentDetails.labourRequired === 1 ? 'person' : 'people'}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total Payment:</span>
                  <span>${paymentDetails.totalPayment?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentOptions;
