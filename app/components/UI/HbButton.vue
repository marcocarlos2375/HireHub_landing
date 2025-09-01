<template>
    <!-- Regular Button -->
    <button
      v-if="!to"
      :class="[
        'hb-button',
        `hb-button--${variant}`,
        `hb-button--${size}`,
        `hb-button--rounded-${rounded}`,
        { 'hb-button--full-width': fullWidth },
        { 'hb-button--disabled': disabled },
        { 'hb-button--loading': loading },
        { 'hb-button--has-leading-icon': $slots['leading-icon'] },
        { 'hb-button--has-trailing-icon': $slots['trailing-icon'] },
        $attrs.class || ''
      ]"
      :disabled="disabled || loading"
      v-bind="$attrs"
      @click="$emit('click', $event)"
    >
      <span :class="loading ? 'invisible' : ''" class="hb-button__content">
        <!-- Leading Icon Slot -->
        <span v-if="$slots['leading-icon']" class="hb-button__leading-icon">
          <slot name="leading-icon" />
        </span>
        
        <!-- Default Slot (Button Text) -->
        <slot />
        
        <!-- Trailing Icon Slot -->
        <span v-if="$slots['trailing-icon']" class="hb-button__trailing-icon">
          <slot name="trailing-icon" />
        </span>
      </span>
      
      <!-- Loading Spinner -->
      <div v-if="loading" class="hb-button__spinner">
        <HbSpinner :size="spinnerSize" :color="spinnerColor" />
      </div>
    </button>
    
    <!-- Navigation Link -->
    <NuxtLink
      v-else
      :to="to"
      :class="[
        'hb-button',
        `hb-button--${variant}`,
        `hb-button--${size}`,
        `hb-button--rounded-${rounded}`,
        { 'hb-button--full-width': fullWidth },
        { 'hb-button--disabled': disabled },
        { 'hb-button--loading': loading },
        { 'hb-button--has-leading-icon': $slots['leading-icon'] },
        { 'hb-button--has-trailing-icon': $slots['trailing-icon'] },
        $attrs.class || ''
      ]"
      :disabled="disabled || loading"
      v-bind="$attrs"
      @click="$emit('click', $event)"
    >
      <span :class="loading ? 'invisible' : ''" class="hb-button__content">
        <!-- Leading Icon Slot -->
        <span v-if="$slots['leading-icon']" class="hb-button__leading-icon">
          <slot name="leading-icon" />
        </span>
        
        <!-- Default Slot (Button Text) -->
        <slot />
        
        <!-- Trailing Icon Slot -->
        <span v-if="$slots['trailing-icon']" class="hb-button__trailing-icon">
          <slot name="trailing-icon" />
        </span>
      </span>
      
      <!-- Loading Spinner -->
      <div v-if="loading" class="hb-button__spinner">
        <HbSpinner :size="spinnerSize" :color="spinnerColor" />
      </div>
    </NuxtLink>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import HbSpinner from './HbSpinner.vue';
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger', 'white'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    rounded: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'pill'].includes(value)
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    }
  });
  
  // Determine appropriate spinner size based on button size
  const spinnerSize = computed(() => {
    switch (props.size) {
      case 'sm': return 'xs';
      case 'md': return 'sm';
      case 'lg': return 'md';
      default: return 'sm';
    }
  });
  
  // Determine appropriate spinner color based on button variant
  const spinnerColor = computed(() => {
    switch (props.variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return 'white';
      case 'white':
        return 'primary';
      case 'outline':
      case 'ghost':
        return props.variant === 'danger' ? 'danger' : 'primary';
      default:
        return 'white';
    }
  });
  
  defineEmits(['click'])
  </script>
  
  <style lang="scss" scoped>
  .hb-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-medium);
    font-family: var(--font-heading) !important;
    font-size: 17px !important;
    transition: all var(--transition-normal) var(--transition-ease);
    position: relative;
    padding: 12px 24px !important;
    cursor: pointer;
  
    /* Rounded variants */
    &--rounded-default {
      border-radius: var(--button-border-radius);
    }
  
    &--rounded-pill {
      border-radius: 9999px;
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--primary-500);
    }
    
    /* Size variants */
    &--sm {
      padding: var(--button-sm-padding);
      font-size: var(--text-sm);
      height: calc(var(--input-height) * 0.8);
      &:not([class*='px-']) {
        padding-left: var(--button-sm-padding);
        padding-right: var(--button-sm-padding);
      }
    }
    
    &--md {
      font-size: var(--text-sm);
      height: var(--input-height);
      &:not([class*='px-']) {
        padding-left: var(--button-md-padding);
        padding-right: var(--button-md-padding);
      }
    }
    
    &--lg {
      font-size: var(--text-base);
      height: calc(var(--input-height) * 1.2);
      &:not([class*='px-']) {
        padding-left: var(--button-lg-padding);
        padding-right: var(--button-lg-padding);
      }
    }
    
    /* Color variants */
    &--primary {
      color: var(--white);
      background-color: var(--primary-500);
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--primary-600);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--primary-500);
      }
    }
    
    &--secondary {
      color: var(--white);
      background-color: var(--secondary-500);
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--secondary-700);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--gray-500);
      }
    }
    
    &--outline {
      color: var(--gray-700);
      background-color: var(--white);
      border: 1px solid var(--gray-300);
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--gray-50);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--primary-500);
      }
    }
    
    &--ghost {
      color: var(--gray-700);
      background-color: transparent;
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--gray-100);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--gray-500);
      }
    }
    
    &--danger {
      color: var(--white);
      background-color: var(--danger-600);
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--danger-700);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--danger-500);
      }
    }
    
    &--white {
      color: var(--primary-500);
      background-color: var(--white);
      
      &:hover:not(.hb-button--disabled) {
        background-color: var(--gray-50);
      }
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 0 4px var(--primary-500);
      }
    }
    
    /* States */
    &--full-width:not([class*='w-']) {
      width: 100%;
    }
    
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    
    &--loading {
      color: transparent;
      
      &:hover {
        color: transparent;
      }
    }
    
    &__spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Icon styles */
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &__leading-icon {
      display: inline-flex;
      margin-right: 0.5rem;
    }
    
    &__trailing-icon {
      display: inline-flex;
      margin-left: 0.5rem;
    }
    
    /* Size-specific icon adjustments */
    &--sm {
      .hb-button__leading-icon,
      .hb-button__trailing-icon {
        svg, img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    
    &--md {
      .hb-button__leading-icon,
      .hb-button__trailing-icon {
        svg, img {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
    
    &--lg {
      .hb-button__leading-icon,
      .hb-button__trailing-icon {
        svg, img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
  </style>
  