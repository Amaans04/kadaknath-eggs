import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, Calendar, Package, TrendingDown } from 'lucide-react';
import { SUBSCRIPTION_PLANS, WHATSAPP_NUMBER } from '../constants';

export const SubscriptionSection = () => {
  return (
    <section id="subscription" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block"
          >
            WEEKLY DELIVERY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-6xl font-extrabold text-brand-black mb-4 md:mb-6 tracking-tight"
          >
            Subscription <span className="text-brand-gold">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-gray-600 leading-relaxed"
          >
            Get fresh Kadaknath eggs delivered to your doorstep regularly with our flexible subscription plans.
          </motion.p>
        </div>

        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
          {SUBSCRIPTION_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col h-full rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 shadow-2xl ${
                plan.id === 'fitness-plan' 
                  ? 'bg-brand-black text-white ring-4 ring-brand-gold ring-offset-8 ring-offset-white' 
                  : 'bg-brand-black text-white'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                {plan.label}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-brand-gold">{plan.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{plan.deliveryFrequency}</p>
                    <p className="text-sm font-bold">{plan.deliveryDetails}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                    <Package size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Monthly Quantity</p>
                    <p className="text-sm font-bold">{plan.monthlyEggs} Eggs / Month</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-4">Plan Benefits</h4>
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="text-brand-gold shrink-0 mt-0.5" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Savings Box */}
              <div className="mt-auto mb-8 p-5 bg-brand-gold/10 rounded-2xl border border-brand-gold/20">
                <div className="flex items-center gap-2 text-brand-gold font-bold text-[10px] mb-2 uppercase tracking-widest">
                  <TrendingDown size={14} />
                  Subscription Savings
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500 text-xs">Regular Price</span>
                  <span className="text-gray-500 text-xs line-through">₹{plan.regularPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm font-medium">You Save</span>
                  <span className="text-brand-gold font-black text-sm">₹{plan.savings} / month</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl md:text-5xl font-black text-white">₹{plan.monthlyTotal}</span>
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>
                <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">₹{plan.pricePerEgg} per egg</p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to subscribe to the ${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-5 text-base shadow-2xl shadow-[#25D366]/20"
                aria-label={`Subscribe to ${plan.name} on WhatsApp`}
              >
                <MessageCircle size={22} aria-hidden="true" />
                Subscribe on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100">
          {[
            { label: "Farm Fresh", value: "Daily Collection" },
            { label: "Hygienic", value: "FSSAI Licensed" },
            { label: "Delivery", value: "Doorstep Service" },
            { label: "Support", value: "WhatsApp Active" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-sm font-bold text-brand-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
