/**
 * Pure business logic and calculation utilities for Kadencio.
 */

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Veuillez renseigner votre nom.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.';
  }

  const trimmedCompany = (data.company || '').trim();
  if (!trimmedCompany) {
    errors.company = 'Veuillez renseigner le nom de votre entreprise.';
  }

  const trimmedEmail = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Veuillez renseigner votre adresse email.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Format d’adresse email invalide.';
  }

  if (data.phone && data.phone.trim().length > 0) {
    const cleanedPhone = data.phone.replace(/[\s.-]/g, '');
    if (!/^\+?[0-9]{8,15}$/.test(cleanedPhone)) {
      errors.phone = 'Numéro de téléphone invalide.';
    }
  }

  const trimmedMessage = (data.message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Veuillez décrire brièvement votre besoin.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Votre message doit contenir au moins 10 caractères.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Diagnostic Express fee (250 €) is deducted from the Sprint if signed within 30 days.
 */
export function calculateSprintDeduction(
  diagnosticCost: number,
  sprintCost: number,
  daysSinceDiagnostic: number
): { eligible: boolean; discountedSprintCost: number; savings: number } {
  if (daysSinceDiagnostic <= 30 && diagnosticCost > 0) {
    const savings = Math.min(diagnosticCost, sprintCost);
    return {
      eligible: true,
      discountedSprintCost: Math.max(0, sprintCost - savings),
      savings,
    };
  }

  return {
    eligible: false,
    discountedSprintCost: sprintCost,
    savings: 0,
  };
}

export interface WeeklyTimeTasks {
  invoicesHours: number;
  quotesHours: number;
  clientRequestsHours: number;
  followupsHours: number;
  toolSyncHours: number;
}

/**
 * Estimates hours lost and typical hours reclaimed with reliable processes.
 * Standard operational gain observed in SME workflow automation: ~70% of repetitive time reclaimed.
 */
export function estimateTimeSavings(tasks: WeeklyTimeTasks): {
  totalWeeklyHoursLost: number;
  estimatedHoursSavedWeekly: number;
  estimatedAnnualHoursSaved: number;
} {
  const total =
    Math.max(0, tasks.invoicesHours || 0) +
    Math.max(0, tasks.quotesHours || 0) +
    Math.max(0, tasks.clientRequestsHours || 0) +
    Math.max(0, tasks.followupsHours || 0) +
    Math.max(0, tasks.toolSyncHours || 0);

  // Conservative 70% efficiency ratio
  const savedWeekly = Math.round(total * 0.7 * 10) / 10;
  // Based on 46 active working weeks per year
  const savedAnnually = Math.round(savedWeekly * 46);

  return {
    totalWeeklyHoursLost: Math.round(total * 10) / 10,
    estimatedHoursSavedWeekly: savedWeekly,
    estimatedAnnualHoursSaved: savedAnnually,
  };
}

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
