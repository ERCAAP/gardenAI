import { Colors, Spacing } from '@/src/constants';
import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Pure white for minimal
  },
  
  // ========== MINIMAL DESIGN STYLES ==========
  
  // Minimal Header
  minimalHeader: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  
  // Minimal Header without title (just SafeAreaView)
  minimalHeaderNoTitle: {
    backgroundColor: '#FFFFFF',
  },
  
  minimalBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  minimalHeaderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  
  // Minimal Scroll Content
  minimalScrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
    paddingTop: 32,
  },
  
  // Title Section with Back Button
  minimalTitleSection: {
    alignItems: 'center',
    marginBottom: 48,
  },
  
  minimalTitleWithBack: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 48,
    paddingTop: 8,
  },
  
  minimalTitleBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 4, // Align with title baseline
  },
  
  minimalTitleContent: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 56, // Compensate for back button width
  },
  
  minimalMainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  
  minimalSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  
  // Minimal Section Styles
  minimalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  
  // Minimal Presets
  minimalPresetsContainer: {
    marginBottom: 40,
  },
  
  minimalPresetOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    marginBottom: 12,
    padding: 20,
  },
  
  minimalPresetSelected: {
    borderColor: '#333',
    backgroundColor: '#FAFAFA',
  },
  
  minimalPresetContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  minimalPresetIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  
  minimalPresetText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  
  minimalPresetTextSelected: {
    fontWeight: '600',
    color: '#000',
  },
  
  minimalSelectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  
  // Minimal Input
  minimalInputContainer: {
    marginBottom: 40,
  },
  
  minimalInputWrapper: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  
  minimalTextInput: {
    padding: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 120,
    lineHeight: 24,
  },
  
  minimalTextInputActive: {
    borderColor: '#333',
  },
  
  minimalCharCount: {
    fontSize: 14,
    color: '#999',
    textAlign: 'right',
    marginTop: 8,
  },
  
  // Minimal Button
  minimalButtonContainer: {
    marginTop: 20,
  },
  
  minimalContinueButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  
  minimalContinueButtonActive: {
    backgroundColor: '#333',
  },
  
  minimalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },
  
  minimalButtonTextActive: {
    color: '#FFFFFF',
  },
  
  // ========== LEGACY STYLES (keeping for compatibility) ==========
  
  // Full Screen Header
  fullScreenHeader: {
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  headerSafeArea: {
    backgroundColor: Colors.background,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screen.horizontal,
    paddingVertical: Spacing.md,
  },
  
  // Modern Back Button Header (legacy)
  headerWithBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screen.horizontal,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D5D40',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 44,
    height: 44,
  },
  
  scrollContent: {
    paddingHorizontal: Spacing.screen.horizontal,
    paddingBottom: Spacing['3xl'] + 100, // Extra space for keyboard
  },
  
  // Scroll content with header (no top margin)
  scrollContentWithHeader: {
    paddingHorizontal: Spacing.screen.horizontal,
    paddingBottom: Spacing['3xl'] + 100, // Extra space for keyboard
    paddingTop: 0, // No top padding since header is separate
  },
  
  // Modern Header Styles
  headerContainer: {
    marginHorizontal: -Spacing.screen.horizontal,
    marginTop: -Spacing.xl,
    marginBottom: Spacing.lg,
  },
  
  // Compact Header (no negative margins)
  compactHeaderContainer: {
    marginHorizontal: -Spacing.screen.horizontal,
    marginTop: 0, // No negative margin
    marginBottom: Spacing.lg,
  },
  
  headerGradient: {
    paddingTop: Spacing.xl + 20,
    paddingBottom: Spacing.xl,
    paddingHorizontal: Spacing.screen.horizontal,
    position: 'relative',
  },
  
  // Compact Header Gradient
  compactHeaderGradient: {
    paddingTop: Spacing.lg, // Less top padding
    paddingBottom: Spacing.lg,
    paddingHorizontal: Spacing.screen.horizontal,
    position: 'relative',
  },
  
  header: {
    alignItems: 'center',
  },
  
  // Magical Title Styles
  title: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 44,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  magicalTitle: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    color: '#2D5D40',
    textAlign: 'center',
    marginBottom: Spacing.sm,
    textShadowColor: 'rgba(255, 215, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  
  // Sparkle Effects
  sparkleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.sm,
    gap: Spacing.md,
  },
  sparkle: {
    fontSize: 20,
    opacity: 0.7,
  },
  
  // Soft Shimmer Effect
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: -50,
    right: -50,
    bottom: 0,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ skewX: '-20deg' }],
  },
  softShimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: -50,
    right: -50,
    bottom: 0,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: [{ skewX: '-20deg' }],
  },
  
  // Floating Hearts
  floatingHeartsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  floatingHeart: {
    fontSize: 20,
    position: 'absolute',
    top: 0,
  },
  
  // Enhanced Preset Styles
  presetsContainer: {
    marginBottom: Spacing['2xl'],
  },
  presetsHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D5D40',
    textAlign: 'center',
    marginBottom: Spacing.lg,
    textShadowColor: 'rgba(0, 0, 0, 0.03)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  presetOption: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
    overflow: 'hidden',
    minHeight: 70,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  magicalPresetOption: {
    backgroundColor: Colors.surface,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#E8F5E8',
    marginBottom: Spacing.lg,
    overflow: 'hidden',
    minHeight: 80,
    position: 'relative',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  optimizedPresetOption: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#E8F5E8',
    marginBottom: Spacing.md,
    overflow: 'hidden',
    minHeight: 60,
    position: 'relative',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  presetOptionSelected: {
    borderColor: '#4A7C59',
    borderWidth: 3,
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    transform: [{ scale: 1.01 }],
  },
  selectedGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.12,
  },
  presetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    position: 'relative',
    zIndex: 1,
  },
  optimizedPresetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    position: 'relative',
    zIndex: 1,
  },
  presetIconContainer: {
    position: 'relative',
    marginRight: Spacing.md,
  },
  presetIcon: {
    fontSize: 36,
  },
  presetStarIcon: {
    fontSize: 28,
    color: '#FFD700',
  },
  presetSparkleIcon: {
    fontSize: 28,
    color: '#FFD700',
  },
  selectedRing: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedStars: {
    fontSize: 10,
  },
  presetText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.textPrimary,
    flex: 1,
  },
  presetTextSelected: {
    color: '#2D5D40',
    fontWeight: '700',
    textShadowColor: 'rgba(255, 215, 0, 0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  selectedIndicator: {
    backgroundColor: '#FFD700',
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  selectedCheck: {
    fontSize: 14,
  },
  
  // Magical Input Styles
  customInputContainer: {
    marginBottom: Spacing['2xl'],
  },
  customInputLabel: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#2D5D40',
    marginBottom: Spacing.md,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.03)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  inputWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderRadius: 16,
  },
  magicalInputWrapper: {
    position: 'relative',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderRadius: 20,
  },
  optimizedInputWrapper: {
    position: 'relative',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 16,
  },
  inputGradient: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E8F5E8',
  },
  customInput: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.border,
    padding: Spacing.base,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.textPrimary,
    textAlignVertical: 'top',
    minHeight: 80,
  },
  magicalCustomInput: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: Spacing.lg,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    color: '#2D5D40',
    textAlignVertical: 'top',
    minHeight: 120,
  },
  optimizedCustomInput: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: Spacing.md,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#2D5D40',
    textAlignVertical: 'top',
    minHeight: 90,
  },
  customInputActive: {
    borderColor: '#4A7C59',
    borderWidth: 2,
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  inputStars: {
    position: 'absolute',
    top: 8,
    right: 12,
  },
  inputStar: {
    fontSize: 14,
    color: '#FFD700',
  },
  characterCount: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.textMuted,
    textAlign: 'right',
    marginTop: Spacing.xs,
  },
  
  // Magical Button Styles
  continueButton: {
    backgroundColor: Colors.lightGray,
    borderRadius: 25,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  continueButtonContainer: {
    marginBottom: Spacing.xl,
  },
  magicalContinueButton: {
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    overflow: 'hidden',
    minHeight: 65,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  optimizedContinueButton: {
    backgroundColor: Colors.lightGray,
    borderRadius: 24,
    overflow: 'hidden',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  continueButtonActive: {
    backgroundColor: 'transparent',
    shadowColor: '#4A7C59',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  buttonGradient: {
    flex: 1,
    borderRadius: 25,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  rainbowButtonGradient: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 65,
  },
  greenButtonGradient: {
    flex: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 56,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xs,
  },
  magicalButtonIcon: {
    fontSize: 18,
    color: Colors.white,
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  
  // Minimalist Footer
  magicalFooter: {
    alignItems: 'center',
    paddingVertical: Spacing['2xl'],
  },
  minimalistFooter: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D5D40',
    textAlign: 'center',
    opacity: 0.8,
  },
  footerSparkles: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.md,
  },
  footerSparkle: {
    fontSize: 18,
    opacity: 0.7,
  },
  
  // Rest of the existing styles...
  resultsContainer: {
    flex: 1,
  },
  resultsScrollContent: {
    flexGrow: 1,
  },
  resultsHeader: {
    padding: Spacing.screen.horizontal,
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  resultsDescription: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginHorizontal: Spacing.screen.horizontal,
    marginVertical: Spacing.lg,
    borderRadius: Spacing.borderRadius.lg,
    overflow: 'hidden',
  },
  gardenImage: {
    width: '100%',
    height: screenWidth - (Spacing.screen.horizontal * 2),
    backgroundColor: Colors.lightGray,
  },
  imageOverlay: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    backgroundColor: Colors.overlay,
    borderRadius: Spacing.borderRadius.full,
    padding: Spacing.sm,
  },
  detailsContainer: {
    paddingHorizontal: Spacing.screen.horizontal,
    paddingBottom: Spacing.xl,
  },
  detailsTitle: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 34,
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  sectionContainer: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  plantList: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: Spacing.borderRadius.md,
    padding: Spacing.base,
  },
  plantItem: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary + '10',
    borderRadius: Spacing.borderRadius.md,
    padding: Spacing.base,
  },
  costLabel: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primary,
  },
  costValue: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    color: Colors.primary,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.screen.horizontal,
    paddingBottom: Spacing.lg,
    gap: Spacing.md,
  },
  chatToggleButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: Spacing.borderRadius.lg,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    minHeight: 50,
  },
  chatToggleText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.white,
  },
  retryButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: Spacing.borderRadius.lg,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    minHeight: 50,
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.white,
  },
  chatContainer: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    maxHeight: screenHeight * 0.5,
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  chatMessages: {
    flex: 1,
    paddingHorizontal: Spacing.base,
  },
  chatMessage: {
    marginVertical: Spacing.xs,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
  },
  chatMessageText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Spacing.borderRadius.md,
  },
  userMessageText: {
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  assistantMessageText: {
    backgroundColor: Colors.lightGray,
    color: Colors.textPrimary,
  },
  chatInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    alignItems: 'flex-end',
  },
  chatInputField: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: Spacing.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.textPrimary,
    maxHeight: 100,
    marginRight: Spacing.sm,
  },
  chatSendButton: {
    backgroundColor: Colors.primary,
    borderRadius: Spacing.borderRadius.full,
    padding: Spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  chatSendButtonDisabled: {
    backgroundColor: Colors.lightGray,
  },
  
  // ========== BEAUTIFUL DESIGN STYLES ==========
  
  // Beautiful Title Section
  beautifulTitleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    paddingTop: 8,
    position: 'relative',
    paddingHorizontal: 16,
  },
  
  beautifulBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 8,
    top: -8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  
  beautifulBackIcon: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginLeft: -1,
  },
  
  beautifulTitleContent: {
    alignItems: 'center',
    flex: 1,
  },
  
  beautifulMainTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  
  beautifulSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  
  // Beautiful Grid Presets
  beautifulPresetsContainer: {
    marginBottom: 36,
  },
  
  beautifulSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  beautifulGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 16,
  },
  
  beautifulGridItem: {
    width: '30%',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    padding: 12,
    minHeight: 85,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  
  beautifulGridItemSelected: {
    borderWidth: 2.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
    transform: [{ scale: 1.01 }],
  },
  
  beautifulGridItemCenter: {
    width: '38%',
    marginTop: 8,
  },
  
  beautifulGridContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  beautifulEmojiContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  
  beautifulEmoji: {
    fontSize: 24,
  },
  
  beautifulSelectedBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  beautifulSelectedIcon: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  
  beautifulGridText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 15,
  },
  
  beautifulGridTextSelected: {
    fontWeight: '700',
  },
  
  // Beautiful Input
  beautifulInputContainer: {
    marginBottom: 36,
  },
  
  beautifulInputHint: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  
  beautifulInputWrapper: {
    position: 'relative',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  
  beautifulTextInput: {
    flex: 1,
    padding: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 120,
    maxHeight: 200,
  },
  
  beautifulTextInputActive: {
    borderColor: '#4CAF50',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  
  beautifulInputBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  
  beautifulInputBadgeText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  
  beautifulCharCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  
  beautifulCharCount: {
    fontSize: 14,
    color: '#999',
  },
  
  beautifulCharCountWarning: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  
  // Beautiful Button
  beautifulButtonContainer: {
    marginTop: 20,
    marginBottom: 24,
  },
  
  beautifulContinueButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  
  beautifulContinueButtonActive: {
    backgroundColor: '#4CAF50',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  
  beautifulButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  
  beautifulButtonIcon: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  
  beautifulButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },
  
  beautifulButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  
  // Beautiful Footer
  beautifulFooter: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  
  beautifulFooterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
}); 