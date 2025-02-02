import variables from "../../style/abstract/_variable.scss";
export const SectionLabel = ({icon, text, onClick, selected}) => {
  return (
    <div className="section-label" onClick={onClick}>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor={variables.primary_v} />
          <stop offset={1} stopColor={variables.secondary_v} />
        </linearGradient>
      </svg>
      <div>{icon}</div>
      <p className={selected ? "selected" : ""}>{text}</p>
    </div>
  );
};
export function SectionObj({id, icon, text, ref}) {
  this.id = id;
  this.icon = icon;
  this.text = text;
  this.ref = ref;
}
