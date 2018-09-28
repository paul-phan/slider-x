const prefix = 'pf'

const DomClasses = {
    wrapper: `${prefix}-slider-wrapper`,
    inner: `${prefix}-slider-inner`,
    slide: `${prefix}-slider-slide`,
    indicators: `${prefix}-slider-pagination`,
    indicatorItem: `${prefix}-slider-pagination-item`,
    controller: `${prefix}-slider-nav`,
    disabledCtrl: `${prefix}-slider-nav-disabled`,
    nextCtrl: `${prefix}-next-nav`,
    prevCtrl: `${prefix}-prev-nav`,
}

const getSlideMovementData = (direction, currIndex, toIndex, totalSilde) => {
  let nextIndex, nextSlidePos, currSlidePos

  if (direction === "next") {
    toIndex ? nextIndex = toIndex : nextIndex = currIndex === totalSilde - 1 ? 0 : currIndex + 1
    nextSlidePos = '100%'
    currSlidePos = '-100%'
  } else if (direction === "prev") {
    // toIndex = 0 is a falsy value
    (toIndex || toIndex === 0) ? nextIndex = toIndex : nextIndex = currIndex === 0 ? totalSilde - 1 : currIndex - 1
    nextSlidePos = '-100%'
    currSlidePos = '100%'
  }

  return { nextIndex, nextSlidePos, currSlidePos }
}