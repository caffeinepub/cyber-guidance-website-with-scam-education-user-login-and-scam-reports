import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScamType } from '../../backend';

interface ScamTypeFilterProps {
  selectedType: ScamType | 'all';
  onTypeChange: (type: ScamType | 'all') => void;
}

const filterOptions = [
  { value: 'all', label: 'All Reports' },
  { value: ScamType.phishing, label: 'Phishing' },
  { value: ScamType.investment, label: 'Investment' },
  { value: ScamType.identityTheft, label: 'Identity Theft' },
  { value: ScamType.fakeTechSupport, label: 'Tech Support' },
  { value: ScamType.romance, label: 'Romance' },
  { value: ScamType.shopping, label: 'Shopping' },
  { value: ScamType.other, label: 'Other' },
];

export default function ScamTypeFilter({ selectedType, onTypeChange }: ScamTypeFilterProps) {
  return (
    <Tabs value={selectedType} onValueChange={(value) => onTypeChange(value as ScamType | 'all')}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto gap-2">
        {filterOptions.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className="text-xs md:text-sm whitespace-nowrap"
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
