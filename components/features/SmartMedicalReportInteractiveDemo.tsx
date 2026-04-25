"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, CheckCircle2, ClipboardCheck, Download, FileText, Pill, Share2, Stethoscope } from "lucide-react";

const scenes = ["collect", "summary", "handoff"] as const;

const dataPoints = [
  { label: "Kepatuhan obat", value: "92%", icon: Pill, tone: "primary" },
  { label: "Catatan harian", value: "18", icon: ClipboardCheck, tone: "sky" },
  { label: "Tanda vital", value: "7", icon: Activity, tone: "emerald" },
];

const summaryRows = [
  { label: "Dosis terlewat", value: "2 kali", marker: "amber" },
  { label: "Keluhan dominan", value: "Pusing ringan", marker: "sky" },
  { label: "Catatan keluarga", value: "Tidur membaik", marker: "emerald" },
];

const reportSections = ["Ringkasan obat", "Grafik kepatuhan", "Catatan caregiver"];

function toneClasses(tone: string) {
  if (tone === "sky") {
    return "bg-sky-50 text-sky-700";
  }

  if (tone === "emerald") {
    return "bg-emerald-50 text-emerald-700";
  }

  return "bg-primary/5 text-primary";
}

function SceneCollect({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="report-collect"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Home data</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Data pemantauan rumah</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <FileText className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {dataPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.75, y: 5 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                className="rounded-[1rem] border border-slate-100 bg-slate-50 px-2 py-2.5"
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-full ${toneClasses(point.tone)}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <p className="mt-2 text-sm font-black text-slate-900">{point.value}</p>
                <p className="mt-1 text-[9px] font-medium leading-4 text-slate-500">{point.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 rounded-[1.6rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.3)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Timeline</p>
            <p className="mt-1 text-sm font-bold text-slate-900">7 hari terakhir</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">Sinkron</span>
        </div>

        <div className="mt-4 flex items-end gap-1.5">
          {[42, 58, 51, 76, 64, 82, 92].map((height, index) => (
            <motion.div
              key={`${height}-${index}`}
              initial={shouldReduceMotion ? { height } : { height: 12 }}
              animate={{ height }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.04 }}
              className="flex-1 rounded-t-full bg-[linear-gradient(180deg,#10b981_0%,#d1fae5_100%)]"
              style={{ minHeight: 12 }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-[1.1rem] border border-primary/10 bg-primary/5 px-3 py-3">
        <p className="text-xs font-semibold text-primary">Siap disusun jadi ringkasan dokter</p>
      </div>
    </motion.div>
  );
}

function SceneSummary({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="report-summary"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-sky-100 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700/75">Auto summary</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Ringkasan medis keluarga</p>
          </div>
          <motion.div
            animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.05, 1] }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white"
          >
            <Stethoscope className="h-4 w-4" />
          </motion.div>
        </div>

        <div className="mt-4 rounded-[1.25rem] border border-sky-100 bg-sky-50/75 p-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-sky-900">Dokter bisa langsung melihat pola penting.</p>
              <p className="mt-1 text-[11px] leading-5 text-sky-700">Bukan chat tercecer, tapi konteks yang sudah dirapikan.</p>
            </div>
            <div className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-sky-700 shadow-sm">AI draft</div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {summaryRows.map((row, index) => (
          <motion.div
            key={row.label}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="rounded-[1.1rem] border border-slate-200 bg-white px-3 py-3 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    row.marker === "amber" ? "bg-amber-400" : row.marker === "sky" ? "bg-sky-400" : "bg-emerald-400"
                  }`}
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{row.label}</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="mt-2 text-sm font-bold text-slate-900">{row.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SceneHandoff({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="report-handoff"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Doctor handoff</p>
            <p className="mt-1 text-sm font-bold text-slate-900">PDF siap dibawa kontrol</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <Download className="h-4 w-4" />
          </div>
        </div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.32, delay: shouldReduceMotion ? 0 : 0.06 }}
        className="mt-3 rounded-[1.6rem] border border-slate-200 bg-white p-3 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.3)]"
      >
        <div className="rounded-[1.2rem] border border-slate-100 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">PulangSehat report</p>
              <p className="mt-1 text-sm font-black text-slate-900">Pak Budi · Mei 2026</p>
              <p className="mt-1 text-[11px] font-medium text-slate-500">Kepatuhan & catatan rumah</p>
            </div>
            <div className="rounded-[0.8rem] border border-primary/10 bg-primary/5 px-2 py-1 text-[10px] font-bold text-primary">PDF</div>
          </div>

          <div className="mt-4 space-y-2">
            {reportSections.map((section, index) => (
              <motion.div
                key={section}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 7 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                className="flex items-center gap-2 rounded-[0.9rem] bg-white px-3 py-2 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <p className="text-xs font-semibold text-slate-800">{section}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-[1.1rem] border border-primary/10 bg-primary/5 px-3 py-3">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            <p className="text-xs font-bold text-primary">Download</p>
          </div>
        </div>
        <div className="rounded-[1.1rem] border border-sky-100 bg-sky-50 px-3 py-3">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-sky-700" />
            <p className="text-xs font-bold text-sky-800">Bagikan</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SmartMedicalReportInteractiveDemo() {
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
              <SceneCollect shouldReduceMotion={shouldReduceMotion} />
            ) : activeStep === 1 ? (
              <SceneSummary shouldReduceMotion={shouldReduceMotion} />
            ) : (
              <SceneHandoff shouldReduceMotion={shouldReduceMotion} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
