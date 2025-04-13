import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/layout/Layout';
import ErrorFallback from './components/error/ErrorFallback';
import Spinner from './components/core/Spinner';

// Lazy-loaded pages for better performance
const DashboardPage = React.lazy(() => import('./pages/Dashboard/DashboardPage'));
const EquipmentListPage = React.lazy(() => import('./pages/Equipment/EquipmentListPage'));
const EquipmentDetailPage = React.lazy(() => import('./pages/Equipment/EquipmentDetailPage'));
const EquipmentFormPage = React.lazy(() => import('./pages/Equipment/EquipmentFormPage'));
const MaintenancePage = React.lazy(() => import('./pages/Maintenance/MaintenancePage'));
const FaultReportPage = React.lazy(() => import('./pages/Faults/FaultReportPage'));
const ReportsPage = React.lazy(() => import('./pages/Reports/ReportsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        console.error('Medical app critical error:', error);
      }}
    >
      <React.Suspense fallback={<Spinner fullScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            {/* Nested routes for equipment management */}
            <Route path="equipment">
              <Route index element={<EquipmentListPage />} />
              <Route path=":id" element={<EquipmentDetailPage />} />
              <Route path="new" element={<EquipmentFormPage />} />
              <Route path="edit/:id" element={<EquipmentFormPage />} />
            </Route>
            <Route path="maintenance" element={<MaintenancePage />} />
            <Route path="faults/report" element={<FaultReportPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default App;