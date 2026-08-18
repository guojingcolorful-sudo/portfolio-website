/**
 * 主 CTA 胶囊按钮（参考规范签名渐变：紫粉到橙的线性渐变 + 内阴影 + 白色内描边）
 */
export default function ContactButton({ href, icon, children, className = '' }) {
  return (
    <a href={href} className={`contact-btn gap-2 ${className}`}>
      {icon}
      {children}
    </a>
  );
}
