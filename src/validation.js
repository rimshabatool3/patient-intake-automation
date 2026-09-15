// Request validation utilities for patient-intake-automation

export function validateHealthcareRequest(payload = {}) {
  return {
    valid: payload !== null && typeof payload === "object",
    validatedAt: new Date().toISOString()
  };
}
