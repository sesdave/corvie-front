// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handleOnbordingNext = (values, steps, path) => {
  const nextIndex = steps.findIndex((step) => step.path === path) + 1

  return steps[nextIndex]?.path || '/signup/complete'
}
