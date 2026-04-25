"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BellRing, CheckCircle2, MessageCircle, ShieldCheck, UserPlus, UsersRound } from "lucide-react";

const scenes = ["invite", "shared", "handoff"] as const;

const caregivers = [
  { name: "Maya", role: "Anak pertama", initials: "MY", status: "Online" },
  { name: "Rafi", role: "Adik", initials: "RF", status: "Siaga" },
  { name: "Ibu Sari", role: "Caregiver rumah", initials: "SR", status: "Aktif" },
];

const sharedUpdates = [
  { time: "07.05", title: "Obat pagi diminum", owner: "Maya" },
  { time: "10.30", title: "Tekanan darah dicatat", owner: "Ibu Sari" },
  { time: "13.00", title: "Makan siang selesai", owner: "Rafi" },
];

const handoffItems = [
  { label: "Reminder terlewat", value: "Amlodipine 19.00" },
  { label: "Backup caregiver", value: "Rafi mengambil alih" },
  { label: "Status keluarga", value: "Semua sudah tahu" },
];

function SceneInvite({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="family-invite"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Care team</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Keluarga Pak Budi</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <UsersRound className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 rounded-[1.25rem] border border-dashed border-primary/25 bg-primary/5 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
              <UserPlus className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Tambah caregiver</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Undang keluarga agar semua melihat jadwal yang sama.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {caregivers.map((caregiver, index) => (
          <motion.div
            key={caregiver.name}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="flex items-center justify-between rounded-[1.1rem] border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                {caregiver.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{caregiver.name}</p>
                <p className="text-[11px] font-medium text-slate-500">{caregiver.role}</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
              {caregiver.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SceneShared({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="family-shared"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Shared status</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Hari ini</p>
          </div>
          <div className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Sinkron
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Obat", "2/3"],
            ["Catatan", "4"],
            ["Keluarga", "3"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.7, y: 4 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              className="rounded-[1rem] border border-slate-100 bg-slate-50 px-2 py-2"
            >
              <p className="text-[10px] font-medium text-slate-500">{label}</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {sharedUpdates.map((update, index) => (
          <motion.div
            key={update.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="rounded-[1.1rem] border border-slate-200 bg-white px-3 py-3 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-primary">{update.time}</span>
              <span className="text-[10px] font-medium text-slate-400">{update.owner}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <p className="text-sm font-semibold text-slate-900">{update.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SceneHandoff({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      key="family-handoff"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      className="flex h-full flex-col"
    >
      <div className="rounded-[1.75rem] border border-amber-100 bg-white p-3 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
            <BellRing className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Butuh follow-up</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Reminder malam belum dikonfirmasi. Backup caregiver diberi notifikasi.</p>
          </div>
        </div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.06 }}
        className="mt-3 rounded-[1.6rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.3)]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Handoff</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Tindak lanjut keluarga</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            <MessageCircle className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {handoffItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="rounded-[1rem] border border-slate-100 bg-slate-50 px-3 py-2.5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-3 rounded-[1.1rem] border border-emerald-100 bg-emerald-50/70 px-3 py-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <p className="text-xs font-semibold text-emerald-800">Tidak bertumpu pada satu caregiver</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FamilySyncInteractiveDemo() {
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
              <SceneInvite shouldReduceMotion={shouldReduceMotion} />
            ) : activeStep === 1 ? (
              <SceneShared shouldReduceMotion={shouldReduceMotion} />
            ) : (
              <SceneHandoff shouldReduceMotion={shouldReduceMotion} />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
