// Chart primitives re-exported for lint and type compliance
export {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend
} from "recharts";
// Chart primitives re-exported for lint rule compliance
// Re-export chart primitives from recharts for lint compliance
// (actual import must be done via this file, not directly from 'recharts')
// Example:
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from '@/components/ui/chart';
