export const accountTypesExample = {
  Bank: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "name",
        type: {
          array: ["u8", 16],
        },
      },
      {
        name: "mint",
        type: "pubkey",
      },
      {
        name: "vault",
        type: "pubkey",
      },
      {
        name: "oracle",
        type: "pubkey",
      },
      {
        name: "oracle_config",
        type: {
          kind: "struct",
          fields: [
            {
              name: "conf_filter",
              type: {
                kind: "struct",
                fields: [
                  {
                    name: "val",
                    type: "i128",
                  },
                ],
              },
            },
            {
              name: "max_staleness_slots",
              type: "i64",
            },
            {
              name: "reserved",
              type: {
                array: ["u8", 72],
              },
            },
          ],
        },
      },
      {
        name: "stable_price_model",
        type: {
          kind: "struct",
          fields: [
            {
              name: "stable_price",
              type: "f64",
            },
            {
              name: "last_update_timestamp",
              type: "u64",
            },
            {
              name: "delay_prices",
              type: {
                array: ["f64", 24],
              },
            },
            {
              name: "delay_accumulator_price",
              type: "f64",
            },
            {
              name: "delay_accumulator_time",
              type: "u32",
            },
            {
              name: "delay_interval_seconds",
              type: "u32",
            },
            {
              name: "delay_growth_limit",
              type: "f32",
            },
            {
              name: "stable_growth_limit",
              type: "f32",
            },
            {
              name: "last_delay_interval_index",
              type: "u8",
            },
            {
              name: "reset_on_nonzero_price",
              type: "u8",
            },
            {
              name: "padding",
              type: {
                array: ["u8", 6],
              },
            },
            {
              name: "reserved",
              type: {
                array: ["u8", 48],
              },
            },
          ],
        },
      },
      {
        name: "deposit_index",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "borrow_index",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "indexed_deposits",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "indexed_borrows",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "index_last_updated",
        type: "u64",
      },
      {
        name: "bank_rate_last_updated",
        type: "u64",
      },
      {
        name: "avg_utilization",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "adjustment_factor",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "util0",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "rate0",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "util1",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "rate1",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "max_rate",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "collected_fees_native",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "loan_origination_fee_rate",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "loan_fee_rate",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maint_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "init_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maint_liab_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "init_liab_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "liquidation_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "dust",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "flash_loan_token_account_initial",
        type: "u64",
      },
      {
        name: "flash_loan_approved_amount",
        type: "u64",
      },
      {
        name: "token_index",
        type: "u16",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "mint_decimals",
        type: "u8",
      },
      {
        name: "bank_num",
        type: "u32",
      },
      {
        name: "min_vault_to_deposits_ratio",
        type: "f64",
      },
      {
        name: "net_borrow_limit_window_size_ts",
        type: "u64",
      },
      {
        name: "last_net_borrows_window_start_ts",
        type: "u64",
      },
      {
        name: "net_borrow_limit_per_window_quote",
        type: "i64",
      },
      {
        name: "net_borrows_in_window",
        type: "i64",
      },
      {
        name: "borrow_weight_scale_start_quote",
        type: "f64",
      },
      {
        name: "deposit_weight_scale_start_quote",
        type: "f64",
      },
      {
        name: "reduce_only",
        type: "u8",
      },
      {
        name: "force_close",
        type: "u8",
      },
      {
        name: "disable_asset_liquidation",
        type: "u8",
      },
      {
        name: "force_withdraw",
        type: "u8",
      },
      {
        name: "tier",
        type: {
          array: ["u8", 4],
        },
      },
      {
        name: "fees_withdrawn",
        type: "u64",
      },
      {
        name: "token_conditional_swap_taker_fee_rate",
        type: "f32",
      },
      {
        name: "token_conditional_swap_maker_fee_rate",
        type: "f32",
      },
      {
        name: "flash_loan_swap_fee_rate",
        type: "f32",
      },
      {
        name: "interest_target_utilization",
        type: "f32",
      },
      {
        name: "interest_curve_scaling",
        type: "f64",
      },
      {
        name: "potential_serum_tokens",
        type: "u64",
      },
      {
        name: "maint_weight_shift_start",
        type: "u64",
      },
      {
        name: "maint_weight_shift_end",
        type: "u64",
      },
      {
        name: "maint_weight_shift_duration_inv",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maint_weight_shift_asset_target",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maint_weight_shift_liab_target",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "fallback_oracle",
        type: "pubkey",
      },
      {
        name: "deposit_limit",
        type: "u64",
      },
      {
        name: "zero_util_rate",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "platform_liquidation_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "collected_liquidation_fees",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "collected_collateral_fees",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "collateral_fee_per_day",
        type: "f32",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 1900],
        },
      },
    ],
  },
  Group: {
    kind: "struct",
    fields: [
      {
        name: "creator",
        type: "pubkey",
      },
      {
        name: "group_num",
        type: "u32",
      },
      {
        name: "admin",
        type: "pubkey",
      },
      {
        name: "fast_listing_admin",
        type: "pubkey",
      },
      {
        name: "mngo_token_index",
        type: "u16",
      },
      {
        name: "padding",
        type: {
          array: ["u8", 2],
        },
      },
      {
        name: "insurance_vault",
        type: "pubkey",
      },
      {
        name: "insurance_mint",
        type: "pubkey",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "testing",
        type: "u8",
      },
      {
        name: "version",
        type: "u8",
      },
      {
        name: "buyback_fees",
        type: "u8",
      },
      {
        name: "buyback_fees_mngo_bonus_factor",
        type: "f32",
      },
      {
        name: "address_lookup_tables",
        type: {
          array: ["pubkey", 20],
        },
      },
      {
        name: "security_admin",
        type: "pubkey",
      },
      {
        name: "deposit_limit_quote",
        type: "u64",
      },
      {
        name: "ix_gate",
        type: "u128",
      },
      {
        name: "buyback_fees_swap_mango_account",
        type: "pubkey",
      },
      {
        name: "buyback_fees_expiry_interval",
        type: "u64",
      },
      {
        name: "fast_listing_interval_start",
        type: "u64",
      },
      {
        name: "fast_listings_in_interval",
        type: "u16",
      },
      {
        name: "allowed_fast_listings_per_interval",
        type: "u16",
      },
      {
        name: "padding2",
        type: {
          array: ["u8", 4],
        },
      },
      {
        name: "collateral_fee_interval",
        type: "u64",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 1800],
        },
      },
    ],
  },
  MangoAccount: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "owner",
        type: "pubkey",
      },
      {
        name: "name",
        type: {
          array: ["u8", 32],
        },
      },
      {
        name: "delegate",
        type: "pubkey",
      },
      {
        name: "account_num",
        type: "u32",
      },
      {
        name: "being_liquidated",
        type: "u8",
      },
      {
        name: "in_health_region",
        type: "u8",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "sequence_number",
        type: "u8",
      },
      {
        name: "net_deposits",
        type: "i64",
      },
      {
        name: "perp_spot_transfers",
        type: "i64",
      },
      {
        name: "health_region_begin_init_health",
        type: "i64",
      },
      {
        name: "frozen_until",
        type: "u64",
      },
      {
        name: "buyback_fees_accrued_current",
        type: "u64",
      },
      {
        name: "buyback_fees_accrued_previous",
        type: "u64",
      },
      {
        name: "buyback_fees_expiry_timestamp",
        type: "u64",
      },
      {
        name: "next_token_conditional_swap_id",
        type: "u64",
      },
      {
        name: "temporary_delegate",
        type: "pubkey",
      },
      {
        name: "temporary_delegate_expiry",
        type: "u64",
      },
      {
        name: "last_collateral_fee_charge",
        type: "u64",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 152],
        },
      },
      {
        name: "header_version",
        type: "u8",
      },
      {
        name: "padding3",
        type: {
          array: ["u8", 7],
        },
      },
      {
        name: "padding4",
        type: "u32",
      },
      {
        name: "tokens",
        type: {
          vec: {
            kind: "struct",
            fields: [
              {
                name: "indexed_position",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "token_index",
                type: "u16",
              },
              {
                name: "in_use_count",
                type: "u16",
              },
              {
                name: "padding",
                type: {
                  array: ["u8", 4],
                },
              },
              {
                name: "previous_index",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "cumulative_deposit_interest",
                type: "f64",
              },
              {
                name: "cumulative_borrow_interest",
                type: "f64",
              },
              {
                name: "reserved",
                type: {
                  array: ["u8", 128],
                },
              },
            ],
          },
        },
      },
      {
        name: "padding5",
        type: "u32",
      },
      {
        name: "serum3",
        type: {
          vec: {
            kind: "struct",
            fields: [
              {
                name: "open_orders",
                type: "pubkey",
              },
              {
                name: "base_borrows_without_fee",
                type: "u64",
              },
              {
                name: "quote_borrows_without_fee",
                type: "u64",
              },
              {
                name: "market_index",
                type: "u16",
              },
              {
                name: "base_token_index",
                type: "u16",
              },
              {
                name: "quote_token_index",
                type: "u16",
              },
              {
                name: "padding",
                type: {
                  array: ["u8", 2],
                },
              },
              {
                name: "highest_placed_bid_inv",
                type: "f64",
              },
              {
                name: "lowest_placed_ask",
                type: "f64",
              },
              {
                name: "potential_base_tokens",
                type: "u64",
              },
              {
                name: "potential_quote_tokens",
                type: "u64",
              },
              {
                name: "lowest_placed_bid_inv",
                type: "f64",
              },
              {
                name: "highest_placed_ask",
                type: "f64",
              },
              {
                name: "reserved",
                type: {
                  array: ["u8", 16],
                },
              },
            ],
          },
        },
      },
      {
        name: "padding6",
        type: "u32",
      },
      {
        name: "perps",
        type: {
          vec: {
            kind: "struct",
            fields: [
              {
                name: "market_index",
                type: "u16",
              },
              {
                name: "padding",
                type: {
                  array: ["u8", 2],
                },
              },
              {
                name: "settle_pnl_limit_window",
                type: "u32",
              },
              {
                name: "settle_pnl_limit_settled_in_current_window_native",
                type: "i64",
              },
              {
                name: "base_position_lots",
                type: "i64",
              },
              {
                name: "quote_position_native",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "quote_running_native",
                type: "i64",
              },
              {
                name: "long_settled_funding",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "short_settled_funding",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "bids_base_lots",
                type: "i64",
              },
              {
                name: "asks_base_lots",
                type: "i64",
              },
              {
                name: "taker_base_lots",
                type: "i64",
              },
              {
                name: "taker_quote_lots",
                type: "i64",
              },
              {
                name: "cumulative_long_funding",
                type: "f64",
              },
              {
                name: "cumulative_short_funding",
                type: "f64",
              },
              {
                name: "maker_volume",
                type: "u64",
              },
              {
                name: "taker_volume",
                type: "u64",
              },
              {
                name: "perp_spot_transfers",
                type: "i64",
              },
              {
                name: "avg_entry_price_per_base_lot",
                type: "f64",
              },
              {
                name: "deprecated_realized_trade_pnl_native",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "oneshot_settle_pnl_allowance",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "recurring_settle_pnl_allowance",
                type: "i64",
              },
              {
                name: "realized_pnl_for_position_native",
                type: {
                  kind: "struct",
                  fields: [
                    {
                      name: "val",
                      type: "i128",
                    },
                  ],
                },
              },
              {
                name: "reserved",
                type: {
                  array: ["u8", 88],
                },
              },
            ],
          },
        },
      },
      {
        name: "padding7",
        type: "u32",
      },
      {
        name: "perp_open_orders",
        type: {
          vec: {
            kind: "struct",
            fields: [
              {
                name: "side_and_tree",
                type: "u8",
              },
              {
                name: "padding1",
                type: {
                  array: ["u8", 1],
                },
              },
              {
                name: "market",
                type: "u16",
              },
              {
                name: "padding2",
                type: {
                  array: ["u8", 4],
                },
              },
              {
                name: "client_id",
                type: "u64",
              },
              {
                name: "id",
                type: "u128",
              },
              {
                name: "quantity",
                type: "i64",
              },
              {
                name: "reserved",
                type: {
                  array: ["u8", 56],
                },
              },
            ],
          },
        },
      },
      {
        name: "padding8",
        type: "u32",
      },
      {
        name: "token_conditional_swaps",
        type: {
          vec: {
            kind: "struct",
            fields: [
              {
                name: "id",
                type: "u64",
              },
              {
                name: "max_buy",
                type: "u64",
              },
              {
                name: "max_sell",
                type: "u64",
              },
              {
                name: "bought",
                type: "u64",
              },
              {
                name: "sold",
                type: "u64",
              },
              {
                name: "expiry_timestamp",
                type: "u64",
              },
              {
                name: "price_lower_limit",
                type: "f64",
              },
              {
                name: "price_upper_limit",
                type: "f64",
              },
              {
                name: "price_premium_rate",
                type: "f64",
              },
              {
                name: "taker_fee_rate",
                type: "f32",
              },
              {
                name: "maker_fee_rate",
                type: "f32",
              },
              {
                name: "buy_token_index",
                type: "u16",
              },
              {
                name: "sell_token_index",
                type: "u16",
              },
              {
                name: "is_configured",
                type: "u8",
              },
              {
                name: "allow_creating_deposits",
                type: "u8",
              },
              {
                name: "allow_creating_borrows",
                type: "u8",
              },
              {
                name: "display_price_style",
                type: "u8",
              },
              {
                name: "intention",
                type: "u8",
              },
              {
                name: "tcs_type",
                type: "u8",
              },
              {
                name: "padding",
                type: {
                  array: ["u8", 6],
                },
              },
              {
                name: "start_timestamp",
                type: "u64",
              },
              {
                name: "duration_seconds",
                type: "u64",
              },
              {
                name: "reserved",
                type: {
                  array: ["u8", 88],
                },
              },
            ],
          },
        },
      },
      {
        name: "reserved_dynamic",
        type: {
          array: ["u8", 64],
        },
      },
    ],
  },
  MintInfo: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "token_index",
        type: "u16",
      },
      {
        name: "group_insurance_fund",
        type: "u8",
      },
      {
        name: "padding1",
        type: {
          array: ["u8", 5],
        },
      },
      {
        name: "mint",
        type: "pubkey",
      },
      {
        name: "banks",
        type: {
          array: ["pubkey", 6],
        },
      },
      {
        name: "vaults",
        type: {
          array: ["pubkey", 6],
        },
      },
      {
        name: "oracle",
        type: "pubkey",
      },
      {
        name: "registration_time",
        type: "u64",
      },
      {
        name: "fallback_oracle",
        type: "pubkey",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 2528],
        },
      },
    ],
  },
  OpenbookV2Market: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "base_token_index",
        type: "u16",
      },
      {
        name: "quote_token_index",
        type: "u16",
      },
      {
        name: "reduce_only",
        type: "u8",
      },
      {
        name: "force_close",
        type: "u8",
      },
      {
        name: "padding1",
        type: {
          array: ["u8", 2],
        },
      },
      {
        name: "name",
        type: {
          array: ["u8", 16],
        },
      },
      {
        name: "openbook_v2_program",
        type: "pubkey",
      },
      {
        name: "openbook_v2_market_external",
        type: "pubkey",
      },
      {
        name: "market_index",
        type: "u16",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "padding2",
        type: {
          array: ["u8", 5],
        },
      },
      {
        name: "registration_time",
        type: "u64",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 512],
        },
      },
    ],
  },
  OpenbookV2MarketIndexReservation: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "market_index",
        type: "u16",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 38],
        },
      },
    ],
  },
  StubOracle: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "mint",
        type: "pubkey",
      },
      {
        name: "price",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "last_update_ts",
        type: "i64",
      },
      {
        name: "last_update_slot",
        type: "u64",
      },
      {
        name: "deviation",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 104],
        },
      },
    ],
  },
  BookSide: {
    kind: "struct",
    fields: [
      {
        name: "roots",
        type: {
          array: [
            {
              kind: "struct",
              fields: [
                {
                  name: "maybe_node",
                  type: "u32",
                },
                {
                  name: "leaf_count",
                  type: "u32",
                },
              ],
            },
            2,
          ],
        },
      },
      {
        name: "reserved_roots",
        type: {
          array: [
            {
              kind: "struct",
              fields: [
                {
                  name: "maybe_node",
                  type: "u32",
                },
                {
                  name: "leaf_count",
                  type: "u32",
                },
              ],
            },
            4,
          ],
        },
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 256],
        },
      },
      {
        name: "nodes",
        type: {
          kind: "struct",
          fields: [
            {
              name: "order_tree_type",
              type: "u8",
            },
            {
              name: "padding",
              type: {
                array: ["u8", 3],
              },
            },
            {
              name: "bump_index",
              type: "u32",
            },
            {
              name: "free_list_len",
              type: "u32",
            },
            {
              name: "free_list_head",
              type: "u32",
            },
            {
              name: "reserved",
              type: {
                array: ["u8", 512],
              },
            },
            {
              name: "nodes",
              type: {
                array: [
                  {
                    kind: "struct",
                    fields: [
                      {
                        name: "tag",
                        type: "u8",
                      },
                      {
                        name: "data",
                        type: {
                          array: ["u8", 111],
                        },
                      },
                      {
                        name: "force_align",
                        type: "u64",
                      },
                    ],
                  },
                  1024,
                ],
              },
            },
          ],
        },
      },
    ],
  },
  EventQueue: {
    kind: "struct",
    fields: [
      {
        name: "header",
        type: {
          kind: "struct",
          fields: [
            {
              name: "head",
              type: "u32",
            },
            {
              name: "count",
              type: "u32",
            },
            {
              name: "seq_num",
              type: "u64",
            },
          ],
        },
      },
      {
        name: "buf",
        type: {
          array: [
            {
              kind: "struct",
              fields: [
                {
                  name: "event_type",
                  type: "u8",
                },
                {
                  name: "padding",
                  type: {
                    array: ["u8", 207],
                  },
                },
              ],
            },
            488,
          ],
        },
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 64],
        },
      },
    ],
  },
  PerpMarket: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "settle_token_index",
        type: "u16",
      },
      {
        name: "perp_market_index",
        type: "u16",
      },
      {
        name: "blocked1",
        type: "u8",
      },
      {
        name: "group_insurance_fund",
        type: "u8",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "base_decimals",
        type: "u8",
      },
      {
        name: "name",
        type: {
          array: ["u8", 16],
        },
      },
      {
        name: "bids",
        type: "pubkey",
      },
      {
        name: "asks",
        type: "pubkey",
      },
      {
        name: "event_queue",
        type: "pubkey",
      },
      {
        name: "oracle",
        type: "pubkey",
      },
      {
        name: "oracle_config",
        type: {
          kind: "struct",
          fields: [
            {
              name: "conf_filter",
              type: {
                kind: "struct",
                fields: [
                  {
                    name: "val",
                    type: "i128",
                  },
                ],
              },
            },
            {
              name: "max_staleness_slots",
              type: "i64",
            },
            {
              name: "reserved",
              type: {
                array: ["u8", 72],
              },
            },
          ],
        },
      },
      {
        name: "stable_price_model",
        type: {
          kind: "struct",
          fields: [
            {
              name: "stable_price",
              type: "f64",
            },
            {
              name: "last_update_timestamp",
              type: "u64",
            },
            {
              name: "delay_prices",
              type: {
                array: ["f64", 24],
              },
            },
            {
              name: "delay_accumulator_price",
              type: "f64",
            },
            {
              name: "delay_accumulator_time",
              type: "u32",
            },
            {
              name: "delay_interval_seconds",
              type: "u32",
            },
            {
              name: "delay_growth_limit",
              type: "f32",
            },
            {
              name: "stable_growth_limit",
              type: "f32",
            },
            {
              name: "last_delay_interval_index",
              type: "u8",
            },
            {
              name: "reset_on_nonzero_price",
              type: "u8",
            },
            {
              name: "padding",
              type: {
                array: ["u8", 6],
              },
            },
            {
              name: "reserved",
              type: {
                array: ["u8", 48],
              },
            },
          ],
        },
      },
      {
        name: "quote_lot_size",
        type: "i64",
      },
      {
        name: "base_lot_size",
        type: "i64",
      },
      {
        name: "maint_base_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "init_base_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maint_base_liab_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "init_base_liab_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "open_interest",
        type: "i64",
      },
      {
        name: "seq_num",
        type: "u64",
      },
      {
        name: "registration_time",
        type: "u64",
      },
      {
        name: "min_funding",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "max_funding",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "impact_quantity",
        type: "i64",
      },
      {
        name: "long_funding",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "short_funding",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "funding_last_updated",
        type: "u64",
      },
      {
        name: "base_liquidation_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "maker_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "taker_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "fees_accrued",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "fees_settled",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "fee_penalty",
        type: "f32",
      },
      {
        name: "settle_fee_flat",
        type: "f32",
      },
      {
        name: "settle_fee_amount_threshold",
        type: "f32",
      },
      {
        name: "settle_fee_fraction_low_health",
        type: "f32",
      },
      {
        name: "settle_pnl_limit_factor",
        type: "f32",
      },
      {
        name: "padding3",
        type: {
          array: ["u8", 4],
        },
      },
      {
        name: "settle_pnl_limit_window_size_ts",
        type: "u64",
      },
      {
        name: "reduce_only",
        type: "u8",
      },
      {
        name: "force_close",
        type: "u8",
      },
      {
        name: "padding4",
        type: {
          array: ["u8", 6],
        },
      },
      {
        name: "maint_overall_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "init_overall_asset_weight",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "positive_pnl_liquidation_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "fees_withdrawn",
        type: "u64",
      },
      {
        name: "platform_liquidation_fee",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "accrued_liquidation_fees",
        type: {
          kind: "struct",
          fields: [
            {
              name: "val",
              type: "i128",
            },
          ],
        },
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 1848],
        },
      },
    ],
  },
  Serum3Market: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "base_token_index",
        type: "u16",
      },
      {
        name: "quote_token_index",
        type: "u16",
      },
      {
        name: "reduce_only",
        type: "u8",
      },
      {
        name: "force_close",
        type: "u8",
      },
      {
        name: "padding1",
        type: {
          array: ["u8", 2],
        },
      },
      {
        name: "name",
        type: {
          array: ["u8", 16],
        },
      },
      {
        name: "serum_program",
        type: "pubkey",
      },
      {
        name: "serum_market_external",
        type: "pubkey",
      },
      {
        name: "market_index",
        type: "u16",
      },
      {
        name: "bump",
        type: "u8",
      },
      {
        name: "padding2",
        type: {
          array: ["u8", 1],
        },
      },
      {
        name: "oracle_price_band",
        type: "f32",
      },
      {
        name: "registration_time",
        type: "u64",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 128],
        },
      },
    ],
  },
  Serum3MarketIndexReservation: {
    kind: "struct",
    fields: [
      {
        name: "group",
        type: "pubkey",
      },
      {
        name: "market_index",
        type: "u16",
      },
      {
        name: "reserved",
        type: {
          array: ["u8", 38],
        },
      },
    ],
  },
};
