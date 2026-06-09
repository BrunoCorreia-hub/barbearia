// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_SUPABASE_ANON_KEY)

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// ============================================
// AGENDAMENTOS
// ============================================

// Busca horários já ocupados em uma data
export async function getBookedSlots(date) {
  const dateStr = date.toISOString().split('T')[0] // "2026-06-10"
  
  const { data, error } = await supabase
    .from('booked_slots')
    .select('time_slot')
    .eq('date', dateStr)

  if (error) throw error
  return data.map(r => r.time_slot) // ["09:00", "10:00", ...]
}

// Busca horários bloqueados (folgas, feriados)
export async function getBlockedSlots(date) {
  const dateStr = date.toISOString().split('T')[0]
  
  const { data, error } = await supabase
    .from('blocked_slots')
    .select('time_slot')
    .eq('date', dateStr)

  if (error) throw error
  return data.map(r => r.time_slot)
}

// Cria um agendamento novo
export async function createAppointment({ clientName, clientPhone, serviceId, date, timeSlot }) {
  const dateStr = date.toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('appointments')
    .insert([{
      client_name:  clientName,
      client_phone: clientPhone,
      service_id:   serviceId,
      date:         dateStr,
      time_slot:    timeSlot,
      status:       'pending'
    }])
    .select()
    .single()

  if (error) throw error
  return data
}

// Busca todos os serviços ativos
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('price')

  if (error) throw error
  return data
}


// ============================================
// ADMIN
// ============================================

// Login do admin
export async function adminLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

// Logout
export async function adminLogout() {
  await supabase.auth.signOut()
}

// Busca sessão atual
export function getSession() {
  return supabase.auth.getSession()
}

// Busca agendamentos por data (admin)
export async function getAppointmentsByDate(date) {
  const dateStr = date.toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('appointments')
    .select(`*, services(name, duration_min, price)`)
    .eq('date', dateStr)
    .order('time_slot')

  if (error) throw error
  return data
}

// Atualiza status de um agendamento
export async function updateAppointmentStatus(id, status) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// Bloqueia um horário
export async function blockSlot(date, timeSlot, reason) {
  const dateStr = date.toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('blocked_slots')
    .insert([{ date: dateStr, time_slot: timeSlot || null, reason }])
    .select()
    .single()

  if (error) throw error
  return data
}