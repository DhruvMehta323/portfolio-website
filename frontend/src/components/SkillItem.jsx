import { Check } from "lucide-react";

export default function SkillItem({ name }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        padding: "1rem",
        borderRadius: "0.5rem",
        border: "1px solid #e5e7eb",
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "rgba(37, 99, 235, 0.1)", // light blue circle
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "0.75rem",
        }}
      >
        <Check size={18} color="#2563eb" strokeWidth={3} />
      </div>
      <span style={{ fontWeight: "500", color: "#111827" }}>{name}</span>
    </div>
  );
}
