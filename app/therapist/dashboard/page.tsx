"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Activity, AlertTriangle, Plus, Search, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function TherapistDashboard() {
  // Mock Data - In production this comes from Supabase
  const patients = [
    { id: 1, name: "Sarah Jenkins", adherence: 92, world: "Forest Realm", day: 12, streak: 5, pain: 3, status: "Active" },
    { id: 2, name: "Mike Ross", adherence: 45, world: "Castle Kingdom", day: 4, streak: 0, pain: 7, status: "Risk" },
    { id: 3, name: "Emma Stone", adherence: 88, world: "Sky Isles", day: 9, streak: 12, pain: 2, status: "Active" },
    { id: 4, name: "John Doe", adherence: 60, world: "Cyber City", day: 2, streak: 2, pain: 5, status: "Warning" },
  ];

  return (
    <div className="min-h-screen bg-ptpal-bg text-slate-200 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col fixed h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-ptpal-gold tracking-wider">PTPAL <span className="text-white text-sm font-normal">PRO</span></h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/therapist/dashboard" className="flex items-center gap-3 px-4 py-3 bg-slate-800 text-white rounded-lg">
            <Users size={18} /> Overview
          </Link>
          <Link href="/therapist/patients" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
            <Users size={18} /> Patients
          </Link>
          <Link href="/therapist/exercises" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
            <Activity size={18} /> Exercise Library
          </Link>
          <Link href="/therapist/invite" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
            <Plus size={18} /> Create Invite
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">JD</div>
              <div>
                 <p className="text-sm font-bold text-white">Dr. John Doe</p>
                 <p className="text-xs text-slate-400">PhysioCare Clinic</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-10 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
           <div>
              <h2 className="text-3xl font-bold text-white">Dashboard</h2>
              <p className="text-slate-400">Overview of your practice</p>
           </div>
           <button className="bg-ptpal-gold hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-transform hover:scale-105">
              <Plus size={18} /> New Patient
           </button>
        </header>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
           <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
              <p className="text-slate-400 text-xs uppercase tracking-wider">Total Patients</p>
              <p className="text-3xl font-bold text-white mt-1">24</p>
           </div>
           <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
              <p className="text-slate-400 text-xs uppercase tracking-wider">Avg Adherence</p>
              <p className="text-3xl font-bold text-emerald-400 mt-1">78%</p>
           </div>
           <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
              <p className="text-slate-400 text-xs uppercase tracking-wider">Alerts</p>
              <div className="flex items-center gap-2 mt-1">
                 <p className="text-3xl font-bold text-red-400">3</p>
                 <AlertTriangle size={16} className="text-red-400" />
              </div>
           </div>
           <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
              <p className="text-slate-400 text-xs uppercase tracking-wider">Active Campaigns</p>
              <p className="text-3xl font-bold text-purple-400 mt-1">12</p>
           </div>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-6">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search patients..." 
                className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-ptpal-accent"
              />
           </div>
           <select className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-ptpal-accent">
              <option>All Worlds</option>
              <option>Castle Kingdom</option>
              <option>Forest Realm</option>
           </select>
        </div>

        {/* Patient Table */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-slate-900 text-slate-400 text-xs uppercase tracking-wider">
                 <tr>
                    <th className="px-6 py-4">Patient Name</th>
                    <th className="px-6 py-4">World / Day</th>
                    <th className="px-6 py-4">Adherence</th>
                    <th className="px-6 py-4">Pain Level</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                 {patients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-slate-700/50 transition-colors">
                       <td className="px-6 py-4 font-medium text-white">{patient.name}</td>
                       <td className="px-6 py-4">
                          <div className="flex flex-col">
                             <span className="text-sm text-purple-400">{patient.world}</span>
                             <span className="text-xs text-slate-500">Day {patient.day}</span>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                             <div className="w-16 bg-slate-900 h-2 rounded-full">
                                <div 
                                   className={`h-full rounded-full ${patient.adherence > 80 ? 'bg-emerald-500' : patient.adherence > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                                   style={{ width: `${patient.adherence}%` }} 
                                />
                             </div>
                             <span className="text-xs">{patient.adherence}%</span>
                          </div>
                       </td>
                       <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs ${patient.pain > 6 ? 'bg-red-900 text-red-200' : 'bg-slate-700 text-slate-300'}`}>
                             {patient.pain}/10
                          </span>
                       </td>
                       <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${patient.status === 'Active' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-900' : 'bg-red-900/30 text-red-400 border border-red-900'}`}>
                             {patient.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-white">
                             <MoreVertical size={18} />
                          </button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </main>
    </div>
  );
}
