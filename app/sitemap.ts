import { MetadataRoute } from "next";
import { getAllBlogCategories, getAllBlogPosts, getCategorySlug } from "@/lib/blog";
import { featureDetails } from "@/lib/features";

const siteUrl = "https://pulangsehat.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await getAllBlogPosts();
    const blogCategories = await getAllBlogCategories();

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${siteUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        ...featureDetails.map((feature) => ({
            url: `${siteUrl}/features/${feature.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        ...blogCategories.map((category) => ({
            url: `${siteUrl}/blog/category/${getCategorySlug(category)}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        })),
        ...blogPosts.map((post) => ({
            url: `${siteUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
