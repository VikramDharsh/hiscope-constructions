import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RefreshCw, Mail, Phone, Lock } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminInquiries() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API}/contact`);
      setItems(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      setError(
        e?.response?.data?.detail || e?.message || "Failed to load inquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fmtDate = (s) => {
    try {
      return new Date(s).toLocaleString();
    } catch {
      return s;
    }
  };

  return (
    <div data-testid="admin-page" className="bg-brand-bg min-h-[80vh]">
      <section className="border-b border-brand-line bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold inline-flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Admin · unprotected
              </p>
              <h1 className="font-display mt-4 text-4xl sm:text-5xl font-black tracking-tight uppercase text-brand-ink">
                Inbound Inquiries
              </h1>
              <p className="mt-3 text-brand-muted max-w-xl">
                All contact-form submissions captured from the website. Newest first.
                Add password protection before sharing this URL.
              </p>
            </div>
            <button
              onClick={fetchData}
              data-testid="admin-refresh"
              className="inline-flex items-center gap-2 border-2 border-brand-ink text-brand-ink px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-ink hover:text-white transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {loading && (
            <p data-testid="admin-loading" className="text-brand-muted">
              Loading…
            </p>
          )}
          {error && (
            <div
              data-testid="admin-error"
              className="border border-brand-ink bg-white p-6 text-brand-ink"
            >
              {error}
            </div>
          )}
          {!loading && !error && items.length === 0 && (
            <div
              data-testid="admin-empty"
              className="border border-brand-line bg-white p-10 text-center"
            >
              <p className="font-display text-2xl font-bold text-brand-ink">
                No inquiries yet.
              </p>
              <p className="text-brand-muted mt-2">
                When visitors submit the contact form, they will appear here.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-brand-primary hover:text-brand-ink"
              >
                Open contact page →
              </Link>
            </div>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="border border-brand-line bg-white divide-y divide-brand-line">
              <div className="px-6 py-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] font-bold text-brand-muted">
                  {items.length} inquiry{items.length === 1 ? "" : "ies"}
                </p>
              </div>
              {items.map((it) => (
                <article
                  key={it.id}
                  data-testid={`inquiry-${it.id}`}
                  className="px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-5"
                >
                  <div className="md:col-span-3">
                    <p className="font-display text-lg font-bold text-brand-ink">
                      {it.name}
                    </p>
                    <p className="text-xs text-brand-muted mt-1">
                      {fmtDate(it.created_at)}
                    </p>
                    {it.service && (
                      <span className="inline-block mt-2 text-[10px] uppercase tracking-[0.2em] font-bold bg-brand-ink text-white px-2 py-1">
                        {it.service}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-3 space-y-1.5 text-sm">
                    <a
                      href={`mailto:${it.email}`}
                      className="inline-flex items-center gap-2 text-brand-ink hover:text-brand-primary"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="break-all">{it.email}</span>
                    </a>
                    {it.phone && (
                      <a
                        href={`tel:${it.phone}`}
                        className="flex items-center gap-2 text-brand-muted hover:text-brand-primary"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {it.phone}
                      </a>
                    )}
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm text-brand-ink whitespace-pre-wrap leading-relaxed">
                      {it.message}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
