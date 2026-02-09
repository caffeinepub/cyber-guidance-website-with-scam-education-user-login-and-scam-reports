import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ScamReport, ScamType } from '../backend';

export function useGetAllReports() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ScamReport[]>({
    queryKey: ['scamReports', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReports();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetReportsByType(scamType: ScamType) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ScamReport[]>({
    queryKey: ['scamReports', 'byType', scamType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getReportsByType(scamType);
    },
    enabled: !!actor && !actorFetching,
  });
}

interface CreateScamReportParams {
  scamType: ScamType;
  title: string;
  description: string;
  lossAmount: bigint | null;
}

export function useCreateScamReport() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: CreateScamReportParams) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createScamReport(
        params.scamType,
        params.title,
        params.description,
        params.lossAmount
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scamReports'] });
    },
  });
}
