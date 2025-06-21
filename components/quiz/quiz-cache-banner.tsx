import { Banner } from "@/components/ui";

export const QuizCacheBanner = ({ className }: { className?: string }) => (
  <Banner
    className={className}
    icon="tabler:info-circle"
    variant="info"
    title="Кэшированные данные"
  >
    В данную форму были добавлены данные из локального кэша.
  </Banner>
);
