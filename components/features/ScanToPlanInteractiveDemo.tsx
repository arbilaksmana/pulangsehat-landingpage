"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarClock, Camera, ClipboardList, Sparkles } from "lucide-react";

const scenes = [
  {
    id: "scan",
    status: "Scanning",
  },
  {
    id: "detect",
    status: "Review",
  },
  {
    id: "remind",
    status: "Ready",
  },
] as const;

const scanPhotoRows = [
  { width: "72%" },
  { width: "88%" },
  { width: "61%" },
  { width: "79%" },
];

const extractedItems = [
  { label: "Obat", value: "Amlodipine 5mg" },
  { label: "Aturan", value: "1 tablet setelah sarapan" },
  { label: "Kontrol", value: "7 hari lagi" },
];

const reminderItems = [
  {
    time: "07.00",
    title: "Amlodipine 5mg",
    note: "1 tablet setelah sarapan",
  },
  {
    time: "13.00",
    title: "Minum air & makan siang",
    note: "Checklist caregiver",
  },
  {
    time: "19.00",
    title: "Catat tekanan darah",
    note: "Dibagikan ke keluarga",
  },
];

function SceneScan({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="scene-scan"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.4rem] border border-white/80 bg-[linear-gradient(180deg,#fff7fb_0%,#fffdfd_100%)] p-2.5 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.35)] sm:rounded-[1.75rem] sm:p-3">
        <div className="relative overflow-hidden rounded-[1.2rem] border border-primary/10 bg-[linear-gradient(180deg,#43243a_0%,#1e1720_100%)] px-2.5 pb-3 pt-2.5 sm:rounded-[1.4rem] sm:px-3 sm:pb-4 sm:pt-3">
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em]">
              <Camera className="h-3.5 w-3.5" />
              Camera active
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] font-medium text-white/80">
              Live preview
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#94607f_0%,#4f3045_42%,#221b22_100%)] p-3">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-white/20" />
              <div className="absolute bottom-8 right-6 h-20 w-20 rounded-full border border-white/10" />
            </div>

            <div className="relative rounded-[1rem] border border-white/15 bg-white/95 p-3 shadow-inner">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">Prescription photo</p>
                  <p className="mt-1 text-xs font-bold text-slate-900">Label obat & instruksi pulang</p>
                </div>
                <div className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">Scan</div>
              </div>

              <div className="relative mt-3 overflow-hidden rounded-[0.95rem] border border-dashed border-primary/30 bg-[linear-gradient(180deg,#fef2f8_0%,#fff_100%)] px-3 py-4">
                <div className="space-y-2">
                  {scanPhotoRows.map((row, index) => (
                    <motion.div
                      key={`${row.width}-${index}`}
                      initial={{ opacity: 0.85 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.04 }}
                      className="rounded-lg border border-white bg-white/90 px-3 py-2 shadow-[0_10px_20px_-16px_rgba(15,23,42,0.35)]"
                      style={{ width: row.width }}
                    >
                      <div className="h-2 rounded-full bg-slate-300" />
                      <div className="mt-2 h-2 rounded-full bg-slate-200" />
                    </motion.div>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-3 rounded-[0.95rem] border-2 border-primary/55">
                  <div className="absolute -left-1 -top-1 h-4 w-4 rounded-tl-[0.7rem] border-l-2 border-t-2 border-primary" />
                  <div className="absolute -right-1 -top-1 h-4 w-4 rounded-tr-[0.7rem] border-r-2 border-t-2 border-primary" />
                  <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-bl-[0.7rem] border-b-2 border-l-2 border-primary" />
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-br-[0.7rem] border-b-2 border-r-2 border-primary" />

                  <motion.div
                    animate={shouldReduceMotion ? { y: 0 } : { y: [0, 118, 0] }}
                    transition={{ duration: shouldReduceMotion ? 0 : 2.3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-2 right-2 top-3 h-0.5 bg-primary/80 shadow-[0_0_18px_rgba(126,11,72,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-white/85">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Capture mode</p>
              <p className="mt-1 text-xs font-medium">Arahkan kamera ke label obat</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_10px_25px_-18px_rgba(255,255,255,0.8)]">
              <div className="h-10 w-10 rounded-full border border-white/20 bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SceneDetect({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="scene-detect"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.4rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)] p-2.5 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.3)] sm:rounded-[1.75rem] sm:p-3">
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700/70">
              <Sparkles className="h-3.5 w-3.5" />
              Detected from image
            </div>
            <div className="rounded-full border border-sky-100 bg-sky-50 px-2 py-1 text-[10px] font-semibold text-sky-700">Review</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[88px_minmax(0,1fr)]">
            <motion.div
              layout
              className="rounded-[1.1rem] border border-slate-200 bg-[linear-gradient(180deg,#fff7fb_0%,#fff_100%)] p-2"
            >
              <div className="rounded-[0.9rem] border border-primary/15 bg-white p-2 shadow-sm">
                <div className="space-y-1.5">
                  {scanPhotoRows.slice(0, 3).map((row, index) => (
                    <div key={`${row.width}-${index}`} className="rounded-md bg-slate-200" style={{ height: 6, width: row.width }} />
                  ))}
                </div>
                <div className="mt-3 rounded-[0.7rem] border border-primary/25 bg-primary/5 px-2 py-1.5 text-[9px] font-semibold text-primary">
                  Source photo
                </div>
              </div>
            </motion.div>

            <div className="rounded-[1.2rem] border border-sky-100 bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Recognized fields</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Siap dikonfirmasi caregiver</p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {extractedItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                    className="rounded-[1rem] border border-slate-100 bg-slate-50 px-3 py-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                      <span className="rounded-full bg-sky-50 px-2 py-1 text-[9px] font-semibold text-sky-700">Detected</span>
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SceneReminder({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="scene-reminder"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="relative h-full rounded-[1.4rem] border border-white/80 bg-[linear-gradient(180deg,#f8fcfb_0%,#ffffff_100%)] p-2.5 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.28)] sm:rounded-[1.75rem] sm:p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700/75">
            <ClipboardList className="h-3.5 w-3.5" />
            Reminders ready
          </div>
          <div className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
            Family sync
          </div>
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-[1rem] border border-slate-200 bg-white/90 px-3 py-2 shadow-sm">
          <div className="rounded-[0.8rem] border border-primary/15 bg-[linear-gradient(180deg,#fff7fb_0%,#fff_100%)] px-2 py-2">
            <div className="space-y-1.5">
              {scanPhotoRows.slice(0, 2).map((row, index) => (
                <div key={`${row.width}-${index}`} className="rounded-md bg-slate-200" style={{ height: 5, width: 34 + index * 12 }} />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Source</p>
            <p className="mt-1 text-xs font-semibold text-slate-700">Label obat berhasil diubah jadi plan</p>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.32, delay: shouldReduceMotion ? 0 : 0.06 }}
          className="mt-4 rounded-[1.35rem] border border-emerald-100 bg-white p-3.5 shadow-[0_24px_45px_-28px_rgba(16,185,129,0.22)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-900">Reminder list</p>
              <p className="mt-1 text-[11px] font-medium text-slate-500">Siap dibagikan ke caregiver & keluarga</p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              <CalendarClock className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            {reminderItems.map((item, index) => (
              <motion.div
                key={item.time + item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                className={`rounded-[1rem] border px-3 py-3 ${
                  index === 0 ? "border-emerald-200 bg-emerald-50/70" : "border-slate-100 bg-slate-50"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-primary">{item.time}</span>
                  <span className="rounded-full bg-white/80 px-2 py-1 text-[9px] font-semibold text-slate-500">
                    {index === 0 ? "Next" : "Scheduled"}
                  </span>
                </div>
                <p className="mt-2 text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-6 text-slate-500">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ScanToPlanInteractiveDemo() {
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
    <div className="relative mx-auto w-full max-w-[292px] sm:max-w-[320px] lg:max-w-[340px]">
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
        className="relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5 sm:rounded-[2.25rem]"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>

        <div className="relative min-h-[500px] overflow-hidden bg-slate-50 px-2.5 pb-2.5 pt-3 sm:aspect-[10/18] sm:min-h-0 sm:px-3 sm:pb-3 sm:pt-4">
          <AnimatePresence mode="wait" initial={false}>
            {activeStep === 0 ? (
              <SceneScan shouldReduceMotion={shouldReduceMotion} />
            ) : activeStep === 1 ? (
              <SceneDetect shouldReduceMotion={shouldReduceMotion} />
            ) : (
              <SceneReminder shouldReduceMotion={shouldReduceMotion} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
