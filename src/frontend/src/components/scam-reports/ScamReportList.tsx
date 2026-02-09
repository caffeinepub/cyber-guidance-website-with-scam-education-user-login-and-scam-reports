import { useGetAllReports, useGetReportsByType } from '../../hooks/useScamReports';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, Calendar, DollarSign } from 'lucide-react';
import { ScamType } from '../../backend';
import { formatDate, formatLossAmount } from '../../utils/format';

interface ScamReportListProps {
  selectedType: ScamType | 'all';
}

const scamTypeLabels: Record<ScamType, string> = {
  [ScamType.phishing]: 'Phishing',
  [ScamType.investment]: 'Investment',
  [ScamType.identityTheft]: 'Identity Theft',
  [ScamType.ransomware]: 'Ransomware',
  [ScamType.fakeTechSupport]: 'Fake Tech Support',
  [ScamType.romance]: 'Romance',
  [ScamType.shopping]: 'Shopping',
  [ScamType.other]: 'Other',
};

export default function ScamReportList({ selectedType }: ScamReportListProps) {
  const allReportsQuery = useGetAllReports();
  const filteredReportsQuery = useGetReportsByType(selectedType as ScamType);

  const query = selectedType === 'all' ? allReportsQuery : filteredReportsQuery;
  const { data: reports, isLoading, error } = query;

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p>Failed to load reports. Please try again.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!reports || reports.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8 text-muted-foreground">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No reports found</p>
            <p className="text-sm mt-2">
              {selectedType === 'all'
                ? 'Be the first to submit a report'
                : 'No reports for this scam type yet'}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Showing {reports.length} {reports.length === 1 ? 'report' : 'reports'}
      </div>
      {reports.map((report) => (
        <Card key={report.id.toString()} className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{scamTypeLabels[report.scamType]}</Badge>
                  {report.lossAmount !== undefined && (
                    <Badge variant="destructive" className="gap-1">
                      <DollarSign className="h-3 w-3" />
                      Loss Reported
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{report.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Calendar className="h-3 w-3" />
                  {formatDate(report.dateReported)}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">{report.description}</p>
            {report.lossAmount !== undefined && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="text-muted-foreground">Reported loss:</span>{' '}
                  <span className="font-medium">{formatLossAmount(report.lossAmount)}</span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
