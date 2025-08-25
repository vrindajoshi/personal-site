type Role = {
  id: number;
  title: string;
  company: string;
  skills: string;
  dates: string;
};

type Props = {
  articles: Role[];
};

export function RoleList({ articles }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hover">
      {articles.map((role) => (
        <div
          key={role.id}
          className="p-4 text-[#FEFAE0] bg-[#435576] rounded-lg shadow-lg hover:bg-[#5d739c] transition-shadow duration-300"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-md">{role.title}</h2>
            <span className="italic text-sm opacity-80">{role.company}</span>
          </div>

          <p className="text-sm mb-1">
            <span role="img" aria-label="tools">🛠</span> {role.skills}
          </p>

          <p className="text-sm opacity-80">{role.dates}</p>
        </div>
      ))}
    </div>
  );
}
