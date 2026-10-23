export const SERVICE_NAMES = [
  'activation-api',
  'billing-service',
  'provisioning-service',
  'notification-service',
  'crm-analytics-service',
] as const;

export type ServiceName = (typeof SERVICE_NAMES)[number];

// Es salud del proceso; todavía no verifica conexiones a Kafka o MongoDB.
export interface HealthResponse {
  service: ServiceName;
  status: 'ok';
}

export type ActivationStatus = 'PENDING' | 'IN_PROGRESS' | 'ACTIVE' | 'FAILED';
export type SimulateFailure = 'none' | 'billing' | 'provisioning';

export const TOPICS = {
  activationRequested: 'activation.requested',
  billingEvents: 'billing.events',
  provisioningEvents: 'provisioning.events',
  activationEvents: 'activation.events',
} as const;

// El sobre común permite rastrear los eventos sin conocer su payload.
export interface EventEnvelope<TEventType extends string, TPayload> {
  eventId: string;
  eventType: TEventType;
  version: 1;
  occurredAt: string;
  correlationId: string;
  customerId: string;
  source: ServiceName;
  payload: TPayload;
}

export type ActivationRequested = EventEnvelope<
  'ActivationRequested',
  {
    planId: string;
    channel: 'web';
    simulateFailure: SimulateFailure;
  }
>;
