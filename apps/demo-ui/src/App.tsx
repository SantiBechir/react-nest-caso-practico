import { SERVICE_NAMES, type ServiceName } from '@activation/contracts';

const descriptions: Record<ServiceName, string> = {
  'activation-api': 'Recibe la solicitud y reúne los resultados.',
  'billing-service': 'Crea y compensa la cuenta de facturación.',
  'provisioning-service': 'Simula la habilitación del servicio.',
  'notification-service': 'Envía el resultado por correo.',
  'crm-analytics-service': 'Registra el historial de eventos.',
};

export function App() {
  return (
    <main>
      <header>
        <span className="eyebrow">Sistemas Distribuidos · TP8</span>
        <h1>Activación de servicios</h1>
        <p>Una solicitud. Varios servicios. Un flujo coordinado por eventos.</p>
      </header>

      <section className="progress" aria-labelledby="progress-title">
        <span className="badge">Bloque 1</span>
        <div>
          <h2 id="progress-title">La estructura está lista</h2>
          <p>En los próximos bloques vas a poder contratar un plan y seguir su activación en vivo.</p>
        </div>
      </section>

      <section aria-labelledby="services-title">
        <h2 id="services-title">Los servicios del flujo</h2>
        <p className="section-note">Esta lista describe sus responsabilidades; todavía no consulta su estado.</p>
        <ul className="services">
          {SERVICE_NAMES.map((service, index) => (
            <li key={service}>
              <span className="number">0{index + 1}</span>
              <div>
                <h3>{service}</h3>
                <p>{descriptions[service]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer>React + NestJS + Kafka · POC local</footer>
    </main>
  );
}
