import { useState } from 'react';
import { useCreateScamReport } from '../../hooks/useScamReports';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ScamType } from '../../backend';

const scamTypeOptions = [
  { value: ScamType.phishing, label: 'Phishing' },
  { value: ScamType.investment, label: 'Investment Scam' },
  { value: ScamType.identityTheft, label: 'Identity Theft' },
  { value: ScamType.ransomware, label: 'Ransomware' },
  { value: ScamType.fakeTechSupport, label: 'Fake Tech Support' },
  { value: ScamType.romance, label: 'Romance Scam' },
  { value: ScamType.shopping, label: 'Shopping Scam' },
  { value: ScamType.other, label: 'Other' },
];

export default function ScamReportForm() {
  const [scamType, setScamType] = useState<ScamType | ''>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lossAmount, setLossAmount] = useState('');

  const createReport = useCreateScamReport();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!scamType || !title.trim() || !description.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const lossAmountValue = lossAmount.trim() ? BigInt(lossAmount) : null;
      
      await createReport.mutateAsync({
        scamType: scamType as ScamType,
        title: title.trim(),
        description: description.trim(),
        lossAmount: lossAmountValue,
      });

      toast.success('Report submitted successfully!');
      
      // Reset form
      setScamType('');
      setTitle('');
      setDescription('');
      setLossAmount('');
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Failed to submit report. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="scamType">
          Scam Type <span className="text-destructive">*</span>
        </Label>
        <Select value={scamType} onValueChange={(value) => setScamType(value as ScamType)}>
          <SelectTrigger id="scamType">
            <SelectValue placeholder="Select scam type" />
          </SelectTrigger>
          <SelectContent>
            {scamTypeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">
          Title <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          placeholder="Brief description of the scam"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Describe what happened in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lossAmount">Loss Amount (Optional)</Label>
        <Input
          id="lossAmount"
          type="number"
          placeholder="Amount lost (in your currency)"
          value={lossAmount}
          onChange={(e) => setLossAmount(e.target.value)}
          min="0"
        />
      </div>

      <Button type="submit" className="w-full" disabled={createReport.isPending}>
        {createReport.isPending ? 'Submitting...' : 'Submit Report'}
      </Button>
    </form>
  );
}
