import dynamic from 'next/dynamic';

const Chart = dynamic(import('react-apexcharts'), { ssr: false });

export default Chart;
