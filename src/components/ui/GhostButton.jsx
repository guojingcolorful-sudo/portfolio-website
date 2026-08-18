/**
 * 幽灵描边胶囊按钮（参考规范：2px #D7E2EA 描边 + 10% 背景悬停）
 */
export default function GhostButton({ href, onClick, icon, children, className = '' }) {
  const cls = `ghost-btn gap-2 ${className}`;
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {icon}
      {children}
    </button>
  );
}
