import {
  HardHat, House, Building2, Factory, Route, Hammer, PaintRoller, ClipboardList, Landmark, Wrench,
  MessagesSquare, Ruler, PencilRuler, FileText, ShieldCheck, KeyRound, LifeBuoy, GraduationCap,
  BadgeCheck, Briefcase, MessageCircle, KanbanSquare, CalendarCheck, Handshake, ClipboardCheck,
  Lightbulb, Leaf, Users, Cpu, Eye, Truck, FileCheck,
} from 'lucide-react'

// Explicit map keeps the bundle small (no wildcard icon import).
const map = {
  HardHat, House, Building2, Factory, Route, Hammer, PaintRoller, ClipboardList, Landmark, Wrench,
  MessagesSquare, Ruler, PencilRuler, FileText, ShieldCheck, KeyRound, LifeBuoy, GraduationCap,
  BadgeCheck, Briefcase, MessageCircle, KanbanSquare, CalendarCheck, Handshake, ClipboardCheck,
  Lightbulb, Leaf, Users, Cpu, Eye, Truck, FileCheck,
}

export default function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const Cmp = map[name] || HardHat
  return <Cmp className={className} aria-hidden="true" {...rest} />
}
