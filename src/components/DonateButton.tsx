import { site } from "@/lib/site";

export function PayPalDonateForm({ className = "" }: { className?: string }) {
  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_top"
      className={className}
    >
      <input
        type="hidden"
        name="hosted_button_id"
        value={site.paypalHostedButtonId}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-semibold text-teal-950 shadow-sm transition hover:bg-gold-400"
      >
        Donate with PayPal
      </button>
    </form>
  );
}
