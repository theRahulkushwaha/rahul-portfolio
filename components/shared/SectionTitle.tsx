export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 mt-2">{subtitle}</p>
      )}
    </div>
  );
}