export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          slug: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          slug: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          slug?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          assigned_to: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          responded_at: string | null
          response: string | null
          status: Database["public"]["Enums"]["contact_status"]
          subject: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          responded_at?: string | null
          response?: string | null
          status?: Database["public"]["Enums"]["contact_status"]
          subject: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          responded_at?: string | null
          response?: string | null
          status?: Database["public"]["Enums"]["contact_status"]
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          order_id: string
          product_id: string | null
          product_options: Json | null
          quantity: number
          service_id: string | null
          sku: string | null
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          order_id: string
          product_id?: string | null
          product_options?: Json | null
          quantity: number
          service_id?: string | null
          sku?: string | null
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          order_id?: string
          product_id?: string | null
          product_options?: Json | null
          quantity?: number
          service_id?: string | null
          sku?: string | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json
          created_at: string
          currency: string
          delivered_at: string | null
          discount_amount: number
          estimated_delivery_date: string | null
          id: string
          internal_notes: string | null
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_reference: string | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          shipping_address: Json | null
          shipping_amount: number
          shipping_method: string | null
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax_amount: number
          total_amount: number
          tracking_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_address: Json
          created_at?: string
          currency?: string
          delivered_at?: string | null
          discount_amount?: number
          estimated_delivery_date?: string | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          shipping_address?: Json | null
          shipping_amount?: number
          shipping_method?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax_amount?: number
          total_amount: number
          tracking_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_address?: Json
          created_at?: string
          currency?: string
          delivered_at?: string | null
          discount_amount?: number
          estimated_delivery_date?: string | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          shipping_address?: Json | null
          shipping_amount?: number
          shipping_method?: string | null
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          tax_amount?: number
          total_amount?: number
          tracking_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_info: {
        Row: {
          description: string | null
          id: string
          is_public: boolean
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          description?: string | null
          id?: string
          is_public?: boolean
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          description?: string | null
          id?: string
          is_public?: boolean
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          brand: string | null
          category_id: string | null
          compare_price: number | null
          cost_price: number | null
          created_at: string
          description: string | null
          dimensions: Json | null
          features: string[] | null
          id: string
          images: string[] | null
          is_active: boolean
          is_digital: boolean
          is_featured: boolean
          low_stock_threshold: number | null
          model: string | null
          name: string
          price: number
          rating: number | null
          rating_count: number | null
          requires_shipping: boolean
          seo_description: string | null
          seo_title: string | null
          short_description: string | null
          sku: string | null
          slug: string
          sort_order: number | null
          specifications: Json | null
          stock_quantity: number
          tags: string[] | null
          thumbnail_url: string | null
          track_inventory: boolean
          updated_at: string
          view_count: number | null
          warranty_period: string | null
          weight: number | null
        }
        Insert: {
          brand?: string | null
          category_id?: string | null
          compare_price?: number | null
          cost_price?: number | null
          created_at?: string
          description?: string | null
          dimensions?: Json | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_digital?: boolean
          is_featured?: boolean
          low_stock_threshold?: number | null
          model?: string | null
          name: string
          price: number
          rating?: number | null
          rating_count?: number | null
          requires_shipping?: boolean
          seo_description?: string | null
          seo_title?: string | null
          short_description?: string | null
          sku?: string | null
          slug: string
          sort_order?: number | null
          specifications?: Json | null
          stock_quantity?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          track_inventory?: boolean
          updated_at?: string
          view_count?: number | null
          warranty_period?: string | null
          weight?: number | null
        }
        Update: {
          brand?: string | null
          category_id?: string | null
          compare_price?: number | null
          cost_price?: number | null
          created_at?: string
          description?: string | null
          dimensions?: Json | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_digital?: boolean
          is_featured?: boolean
          low_stock_threshold?: number | null
          model?: string | null
          name?: string
          price?: number
          rating?: number | null
          rating_count?: number | null
          requires_shipping?: boolean
          seo_description?: string | null
          seo_title?: string | null
          short_description?: string | null
          sku?: string | null
          slug?: string
          sort_order?: number | null
          specifications?: Json | null
          stock_quantity?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          track_inventory?: boolean
          updated_at?: string
          view_count?: number | null
          warranty_period?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: Json | null
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          address?: Json | null
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name: string
          id: string
          is_active?: boolean
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          address?: Json | null
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          helpful_count: number | null
          id: string
          is_featured: boolean
          is_verified: boolean
          order_id: string | null
          product_id: string | null
          rating: number
          service_id: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          helpful_count?: number | null
          id?: string
          is_featured?: boolean
          is_verified?: boolean
          order_id?: string | null
          product_id?: string | null
          rating: number
          service_id?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          helpful_count?: number | null
          id?: string
          is_featured?: boolean
          is_verified?: boolean
          order_id?: string | null
          product_id?: string | null
          rating?: number
          service_id?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          advance_booking_days: number | null
          booking_required: boolean
          category_id: string | null
          created_at: string
          description: string | null
          duration_minutes: number | null
          features: string[] | null
          id: string
          images: string[] | null
          is_active: boolean
          is_featured: boolean
          is_home_service: boolean
          location: string | null
          max_bookings_per_day: number | null
          name: string
          price: number
          rating: number | null
          rating_count: number | null
          requirements: string[] | null
          seo_description: string | null
          seo_title: string | null
          service_area: string[] | null
          short_description: string | null
          slug: string
          sort_order: number | null
          tags: string[] | null
          thumbnail_url: string | null
          updated_at: string
          view_count: number | null
          what_included: string[] | null
        }
        Insert: {
          advance_booking_days?: number | null
          booking_required?: boolean
          category_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          is_home_service?: boolean
          location?: string | null
          max_bookings_per_day?: number | null
          name: string
          price: number
          rating?: number | null
          rating_count?: number | null
          requirements?: string[] | null
          seo_description?: string | null
          seo_title?: string | null
          service_area?: string[] | null
          short_description?: string | null
          slug: string
          sort_order?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
          view_count?: number | null
          what_included?: string[] | null
        }
        Update: {
          advance_booking_days?: number | null
          booking_required?: boolean
          category_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          is_featured?: boolean
          is_home_service?: boolean
          location?: string | null
          max_bookings_per_day?: number | null
          name?: string
          price?: number
          rating?: number | null
          rating_count?: number | null
          requirements?: string[] | null
          seo_description?: string | null
          seo_title?: string | null
          service_area?: string[] | null
          short_description?: string | null
          slug?: string
          sort_order?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
          view_count?: number | null
          what_included?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
    }
    Enums: {
      contact_status: "new" | "in_progress" | "resolved" | "closed"
      order_status:
        | "pending"
        | "confirmed"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled"
        | "refunded"
      payment_status:
        | "pending"
        | "processing"
        | "completed"
        | "failed"
        | "refunded"
        | "cancelled"
      user_role: "customer" | "admin" | "staff"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      contact_status: ["new", "in_progress", "resolved", "closed"],
      order_status: [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "refunded",
      ],
      payment_status: [
        "pending",
        "processing",
        "completed",
        "failed",
        "refunded",
        "cancelled",
      ],
      user_role: ["customer", "admin", "staff"],
    },
  },
} as const
