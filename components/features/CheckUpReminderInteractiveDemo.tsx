"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BellRing, CalendarDays, CheckCircle2, Clock3, MapPin, Stethoscope } from "lucide-react";

const scenes = ["schedule", "reminder", "prepare"] as const;

const upcomingChecks = [
  { date: "12", month: "Mei", title: "Kontrol jantung", place: "RS Harapan", status: "Utama" },
  { date: "19", month: "Mei", title: "Cek lab darah", place: "Klinik dekat rumah", status: "Lab" },
  { date: "26", month: "Mei", title: "Review obat", place: "Telekonsultasi", status: "Online" },
];

const reminderSteps = [
  { label: "H-7", text: "Atur transportasi" },
  { label: "H-2", text: "Kumpulkan catatan" },
  { label: "H-0", text: "Berangkat kontrol" },
];

const prepItems = [
  "Kartu kontrol & rujukan",
  "Catatan tekanan darah",
  "Daftar obat minggu ini",
];

function SceneSchedule({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="checkup-schedule"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Check-up planner</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Jadwal kontrol keluarga</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <CalendarDays className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 rounded-[1.25rem] border border-primary/10 bg-[linear-gradient(180deg,#fff7fb_0%,#ffffff_100%)] p-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/70">Next visit</p>
              <p className="mt-1 text-lg font-bold text-slate-900">12 Mei</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Kontrol jantung · 09.30</p>
            </div>
            <motion.div
              animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.05, 1] }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-primary text-lg font-black text-white shadow-[0_16px_26px_-18px_rgba(126,11,72,0.8)]"
            >
              12
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {upcomingChecks.map((item, index) => (
          <motion.div
            key={item.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="flex items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-[0.9rem] bg-slate-50 text-slate-900">
              <span className="text-sm font-black leading-none">{item.date}</span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase text-slate-400">{item.month}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900">{item.title}</p>
              <p className="mt-1 truncate text-[11px] font-medium text-slate-500">{item.place}</p>
            </div>
            <span className="rounded-full bg-primary/5 px-2 py-1 text-[9px] font-semibold text-primary">{item.status}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SceneReminder({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="checkup-reminder"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-amber-100 bg-white p-3 shadow-sm">
        <div className="flex items-start gap-3">
          <motion.div
            animate={shouldReduceMotion ? { rotate: 0 } : { rotate: [0, -8, 8, 0] }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600"
          >
            <BellRing className="h-4 w-4" />
          </motion.div>
          <div>
            <p className="text-sm font-bold text-slate-900">Kontrol 7 hari lagi</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Keluarga punya waktu menyiapkan transportasi dan dokumen.</p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-[1.6rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.3)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Reminder rhythm</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Pengingat bertahap</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
            <Clock3 className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {reminderSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="relative flex items-center gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 px-3 py-2.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-black text-primary shadow-sm">
                {step.label}
              </div>
              <p className="text-sm font-semibold text-slate-900">{step.text}</p>
              {index === 0 ? (
                <span className="ml-auto rounded-full bg-amber-50 px-2 py-1 text-[9px] font-semibold text-amber-700">Aktif</span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-[1.1rem] border border-sky-100 bg-sky-50/80 px-3 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sky-700" />
          <p className="text-xs font-semibold text-sky-800">RS Harapan · estimasi 35 menit</p>
        </div>
      </div>
    </motion.div>
  );
}

function ScenePrepare({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="checkup-prepare"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="relative rounded-[1.75rem] border border-emerald-100 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700/75">Visit prep</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Siap untuk kontrol</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Stethoscope className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/70 p-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-emerald-800">Checklist keluarga</p>
              <p className="mt-1 text-[11px] leading-5 text-emerald-700">Semua kebutuhan kontrol tersimpan di satu tempat.</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-emerald-700">3/3</p>
              <p className="text-[10px] font-semibold text-emerald-600">Lengkap</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {prepItems.map((item, index) => (
          <motion.div
            key={item}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="flex items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white px-3 py-3 shadow-sm"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-slate-900">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-[1.1rem] border border-primary/10 bg-primary/5 px-3 py-3">
        <p className="text-xs font-semibold text-primary">Dibagikan ke Maya, Rafi, dan caregiver rumah</p>
      </div>
    </motion.div>
  );
}

export default function CheckUpReminderInteractiveDemo() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % scenes.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]">
      <motion.div
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : activeStep === 0
              ? { y: 0 }
              : activeStep === 1
                ? { y: -3 }
                : { y: -5 }
        }
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>

        <div className="relative aspect-[10/18] overflow-hidden bg-slate-50 px-3 pb-3 pt-4">
          <AnimatePresence mode="wait" initial={false}>
            {activeStep === 0 ? (
              <SceneSchedule shouldReduceMotion={shouldReduceMotion} />
            ) : activeStep === 1 ? (
              <SceneReminder shouldReduceMotion={shouldReduceMotion} />
            ) : (
              <ScenePrepare shouldReduceMotion={shouldReduceMotion} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
