const express = require('express');
// common.js — funciones compartidas por TODOS los CRUD del panel

const API_BASE = 'http://localhost:3000';

// Llamadas a la API con token y manejo de errores
async function apiFetch(path, opts = {}) {
  const token = localStorage.getItem('token');

  const headers = opts.headers || {};

  // Si el body no es FormData, agregamos Content-Type JSON
  if (!headers['Content-Type'] && !(opts.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  // Agregar token si existe
  if (token) headers['Authorization'] = 'Bearer ' + token;

  opts.headers = headers;

  // Hacer petición
  const res = await fetch(API_BASE + path, opts);

  // Manejo errores
  if (!res.ok) {
    let text = "";
    try { text = await res.text(); } catch {}
    throw new Error('Error HTTP ' + res.status + ': ' + text);
  }

  // Si la respuesta es JSON
  try { return await res.json(); }
  catch { return {}; }
}

// Mostrar modal
function showModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

// Ocultar modal
function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}
