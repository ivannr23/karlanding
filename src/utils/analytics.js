const STORAGE_KEY = 'karlanding_analytics';

export const trackEvent = (eventName, eventData = {}) => {
    const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"views": [], "events": []}');

    const newEvent = {
        timestamp: new Date().toISOString(),
        event: eventName,
        ...eventData,
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        path: window.location.pathname,
    };

    currentData.events.push(newEvent);

    // Limits
    if (currentData.events.length > 500) currentData.events.shift();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
};

export const trackPageView = async () => {
    const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"views": [], "events": []}');

    let locationData = { city: 'Unknown', country: 'Unknown' };
    try {
        // Using a free, no-key API for real-time location insights
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
            const data = await response.json();
            locationData = { city: data.city, country: data.country_name, flag: data.country_code };
        }
    } catch (e) {
        console.warn('Geolocation tracked failed, using defaults');
    }

    const newView = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        path: window.location.pathname,
        referrer: document.referrer || 'Direct',
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        userAgent: navigator.userAgent,
        ...locationData
    };

    currentData.views.push(newView);

    // Limits
    if (currentData.views.length > 500) currentData.views.shift();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
};

export const getAnalyticsData = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"views": [], "events": []}');
};

export const getInsights = () => {
    const data = getAnalyticsData();
    const views = data.views;
    const events = data.events;

    // Real-time calculations
    const uniqueVisitors = new Set(views.map(v => v.userAgent + (v.city || ''))).size;
    const totalViewsCount = views.length;

    const deviceType = {
        mobile: views.filter(v => /iPhone|Android|iPad/i.test(v.userAgent)).length,
        desktop: views.filter(v => !/iPhone|Android|iPad/i.test(v.userAgent)).length
    };

    // Calculate Traffic by Day (Real)
    const trafficByDay = views.reduce((acc, view) => {
        const day = new Date(view.timestamp).toLocaleDateString('es-ES', { weekday: 'short' });
        acc[day] = (acc[day] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(trafficByDay).map(([name, visits]) => ({ name, visits }));

    return {
        totalViews: totalViewsCount,
        uniqueVisitors,
        mobileUsers: deviceType.mobile,
        desktopUsers: deviceType.desktop,
        chartData: chartData.length > 0 ? chartData : [{ name: 'Sin datos', visits: 0 }],
        recentEvents: events.slice(-15).reverse(),
        topLocations: views.reduce((acc, v) => {
            if (v.country && v.country !== 'Unknown') {
                acc[v.country] = (acc[v.country] || 0) + 1;
            }
            return acc;
        }, {}),
    };
};

