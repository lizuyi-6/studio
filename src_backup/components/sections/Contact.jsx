import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { SectionHeader, GlowCard } from '../ui';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const contactInfo = [
    { icon: Mail, label: '商务邮箱', value: 'hello@aether.io', href: 'mailto:hello@aether.io' },
    { icon: Phone, label: '联系电话', value: '400-888-8888', href: 'tel:+86-400-888-8888' },
    { icon: MapPin, label: '公司地址', value: '北京市海淀区中关村科技园\nA座 15层' }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="联系我们"
            title={<>
              开始您的<span className="text-[#0066FF]">数字化之旅</span>
            </>}
            subtitle="告诉我们您的项目需求，专业团队将在 24 小时内与您联系"
            className="mb-16"
          />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <GlowCard>
              <div className="border border-white/10 bg-white/[0.02] p-8 h-full">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  联系方式
                </motion.h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <ContactItem {...item} />
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-8 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-sm text-white/40 mb-2">工作时间</div>
                  <p className="text-white">周一至周五 9:00 - 18:00</p>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Form */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <GlowCard>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.02] p-8">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    项目咨询
                  </motion.h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <FormField 
                      label="姓名" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                      delay={0}
                    />
                    <FormField 
                      label="邮箱" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                      delay={0.1}
                    />
                  </div>

                  <FormField 
                    label="公司名称" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange}
                    focusedField={focusedField}
                    setFocusedField={setFocusedField}
                    delay={0.2}
                  />

                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm text-white/60 mb-2">
                      项目需求 <span className="text-[#0066FF]">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-all resize-none"
                      placeholder="请描述您的项目需求..."
                      animate={{
                        borderColor: focusedField === 'message' ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: focusedField === 'message' ? '0 0 20px rgba(0, 102, 255, 0.2)' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 font-medium transition-all disabled:opacity-50 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-[#0066FF]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          发送中...
                        </>
                      ) : (
                        <>
                          提交咨询 <Send className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  className="border border-white/10 bg-white/[0.02] p-10 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-6 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-[#0066FF]" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    提交成功！
                  </motion.h3>
                  <motion.p 
                    className="text-white/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    感谢您的咨询，我们的专业团队将在 24 小时内与您联系。
                  </motion.p>
                </motion.div>
              )}
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 cursor-pointer">
      <motion.div 
        className="w-12 h-12 bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0"
        whileHover={{ backgroundColor: '#0066FF', scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors" />
      </motion.div>
      <div>
        <div className="text-sm text-white/40 mb-1">{label}</div>
        <div className="text-white whitespace-pre-line">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}

function FormField({ label, name, type = 'text', value, onChange, required = false, focusedField, setFocusedField, delay }) {
  const isFocused = focusedField === name;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + delay }}
    >
      <label className="block text-sm text-white/60 mb-2">
        {label} {required && <span className="text-[#0066FF]">*</span>}
      </label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        required={required}
        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-all"
        placeholder={label}
        animate={{
          borderColor: isFocused ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isFocused ? '0 0 20px rgba(0, 102, 255, 0.2)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
