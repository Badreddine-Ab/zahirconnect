"use client"

import { useState, useCallback, useRef, useEffect } from "react"

interface UseInViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean
}

export function useInView({
    threshold = 0,
    rootMargin = "-50px 0px",
    triggerOnce = true,
}: UseInViewOptions = {}) {
    const [isInView, setInView] = useState(false)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setInView(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    const ref = useCallback((node: HTMLElement | null) => {
        if (observerRef.current) {
            observerRef.current.disconnect()
            observerRef.current = null
        }

        if (node) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true)
                        if (triggerOnce) {
                            observer.disconnect()
                        }
                    } else if (!triggerOnce) {
                        setInView(false)
                    }
                },
                { threshold, rootMargin }
            )

            observer.observe(node)
            observerRef.current = observer
        }
    }, [threshold, rootMargin, triggerOnce])

    return { ref, isInView }
}
