import { DashboardMain } from '../dashboardMain/DashboardMain';

const Content = () => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </main>
    </>
  );
};

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <DashboardMain>
          <Content />
        </DashboardMain>
      </div>
    </>
  );
}
