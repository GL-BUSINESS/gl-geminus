<script setup>
import HeroBanner from '../components/sections/HeroBanner.vue'
import WhatIsSection from '../components/sections/WhatIsSection.vue'
import HowItWorks from '../components/sections/HowItWorks.vue'
import AdvantagesSection from '../components/sections/AdvantagesSection.vue'
import ComparisonSection from '../components/sections/ComparisonSection.vue'
import WhyChooseSection from '../components/sections/WhyChooseSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import TheFooter from '../components/layout/TheFooter.vue'
</script>

<template>
  <HeroBanner />
  <WhatIsSection />
  <HowItWorks />
  <AdvantagesSection />
  <ComparisonSection />
  <WhyChooseSection />
  <AboutSection />
  <!-- O bloco de contato e exclusivo da home; a pagina de politica
       encerra no CTA, como na referencia. -->
  <TheFooter />
</template>
