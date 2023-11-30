import {PostHog} from 'posthog-node'

export default function PostHogClient() {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!apiKey) {
        return
    }

    return new PostHog(apiKey, {
        flushAt: 1,
        flushInterval: 0
    })
}
