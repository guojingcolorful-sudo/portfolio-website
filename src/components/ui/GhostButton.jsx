/**
 * 幽灵描边胶囊按钮（参考规范：2px #D7E2EA 描边 + 10% 背景悬停）
 */
export default function GhostButton({ href, onClick, children, className = '' }) {
  const cls = `ghost-btn ${className}`;
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
