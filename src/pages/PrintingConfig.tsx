
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Printer, ChevronDown, Play, Eye, DollarSign, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentFormDialog from '@/components/PaymentFormDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const PrintingConfig = () => {
  const [layerThickness, setLayerThickness] = useState('0.2');
  const [nozzleSpeed, setNozzleSpeed] = useState('60');
  const [acceleration, setAcceleration] = useState('500');
  const [bedTemperature, setBedTemperature] = useState('60');
  const [material, setMaterial] = useState('PLA');
  const [fileName, setFileName] = useState('');
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">3D Printing Configuration</h1>
            
            {/* Top Bar */}
            <div className="flex flex-wrap gap-3 mb-8 border-b pb-4">
              <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Slicing
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Options
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Viewing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Visualizing
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="secondary" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                onClick={() => setIsPaymentFormOpen(true)}
              >
                <DollarSign className="w-4 h-4" />
                Payment
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Section - Form */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="layer-thickness">Layer Thickness (mm)</Label>
                  <Input 
                    id="layer-thickness" 
                    type="number" 
                    step="0.01"
                    min="0.05" 
                    max="0.4" 
                    value={layerThickness}
                    onChange={(e) => setLayerThickness(e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="nozzle-speed">Nozzle Speed (mm/s)</Label>
                  <Input 
                    id="nozzle-speed" 
                    type="number" 
                    min="10" 
                    max="200" 
                    value={nozzleSpeed}
                    onChange={(e) => setNozzleSpeed(e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="acceleration">Acceleration (mm/s²)</Label>
                  <Input 
                    id="acceleration" 
                    type="number" 
                    min="100" 
                    max="3000" 
                    value={acceleration}
                    onChange={(e) => setAcceleration(e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bed-temperature">Bed Temperature (°C)</Label>
                  <Input 
                    id="bed-temperature" 
                    type="number" 
                    min="20" 
                    max="120" 
                    value={bedTemperature}
                    onChange={(e) => setBedTemperature(e.target.value)}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="material">Material</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger id="material">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="PLA">PLA</SelectItem>
                      <SelectItem value="PPA">PPA</SelectItem>
                      <SelectItem value="ABS">ABS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="file-upload">Upload 3D Model</Label>
                  <div className="flex flex-col gap-3">
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {fileName ? fileName : 'Click to upload or drag and drop'}
                        </span>
                        <input 
                          id="file-upload" 
                          type="file" 
                          className="hidden" 
                          accept=".stl,.obj,.3mf"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                    <div className="text-xs text-gray-500">
                      Supported formats: STL, OBJ, 3MF
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Section - Preview Area */}
              <div className="w-full md:w-1/2 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50 min-h-[400px]">
                <div className="text-center p-6">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">3D model preview will appear here</p>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="mt-8 pt-4 border-t flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Configure settings and upload a model to calculate slicing details</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Calculate Total Time
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Payment Form Dialog */}
      <PaymentFormDialog 
        isOpen={isPaymentFormOpen}
        onClose={() => setIsPaymentFormOpen(false)}
      />
    </div>
  );
};

export default PrintingConfig;
