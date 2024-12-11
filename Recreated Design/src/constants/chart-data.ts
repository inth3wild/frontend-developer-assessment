import { type ChartConfig } from '@/components/ui/chart';

// Bar chart data
export const barchartData = [
  { month: 'January', revenue: 379, fill: 'var(--color-january)' },
  { month: 'February', revenue: 928, fill: 'var(--color-february)' },
  { month: 'March', revenue: 640, fill: 'var(--color-march)' },
  { month: 'April', revenue: 440, fill: 'var(--color-april)' },
  { month: 'May', revenue: 588, fill: 'var(--color-may)' },
  { month: 'June', revenue: 1052, fill: 'var(--color-june)' },
  { month: 'July', revenue: 509, fill: 'var(--color-july)' },
  { month: 'August', revenue: 928, fill: 'var(--color-august)' },
  { month: 'September', revenue: 254, fill: 'var(--color-september)' },
  { month: 'October', revenue: 732, fill: 'var(--color-october)' },
  { month: 'November', revenue: 411, fill: 'var(--color-november)' },
  { month: 'December', revenue: 640, fill: 'var(--color-december)' },
];

export const barchartConfig = {
  pending: {
    label: 'Pending (10%)',
    color: '#0049C6',
  },
  income: {
    label: 'Income',
    color: '#6C5DD3',
  },
  expance: {
    label: 'Expance',
    color: '#FF754C',
  },
  january: {
    label: 'January',
    color: 'var(--chart-1)',
  },
  february: {
    label: 'February',
    color: 'var(--chart-2)',
  },
  march: {
    label: 'March',
    color: 'var(--chart-3)',
  },
  april: {
    label: 'April',
    color: 'var(--chart-4)',
  },
  may: {
    label: 'May',
    color: 'var(--chart-5)',
  },
  june: {
    label: 'June',
    color: 'var(--chart-6)',
  },
  july: {
    label: 'July',
    color: 'var(--chart-7)',
  },
  august: {
    label: 'August',
    color: 'var(--chart-8)',
  },
  september: {
    label: 'September',
    color: 'var(--chart-9)',
  },
  october: {
    label: 'October',
    color: 'var(--chart-10)',
  },
  november: {
    label: 'November',
    color: 'var(--chart-11)',
  },
  december: {
    label: 'December',
    color: 'var(--chart-12)',
  },
} satisfies ChartConfig;

// Pie chart data
export const piechartData = [
  { frequency: 'daily', customers: 732, fill: 'var(--color-daily)' },
  { frequency: 'other', customers: 500, fill: 'var(--color-other)' },
  { frequency: 'weekly', customers: 1246, fill: 'var(--color-weekly)' },
];

export const piechartConfig = {
  daily: {
    label: 'Daily',
    color: 'var(--pie-chart-1)',
  },
  weekly: {
    label: 'Weekly',
    color: 'var(--pie-chart-2)',
  },
  other: {
    label: 'Other',
    color: 'var(--pie-chart-3)',
  },
} satisfies ChartConfig;
