/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mango_v4.json`.
 */
export type MangoV4 = {
  "address": "4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg",
  "metadata": {
    "name": "mangoV4",
    "version": "0.24.3",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "adminTokenWithdrawFees",
      "discriminator": [
        113,
        66,
        184,
        206,
        20,
        34,
        40,
        160
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "adminPerpWithdrawFees",
      "discriminator": [
        152,
        19,
        236,
        142,
        60,
        165,
        225,
        244
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "groupCreate",
      "discriminator": [
        226,
        82,
        239,
        119,
        107,
        136,
        166,
        240
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  71,
                  114,
                  111,
                  117,
                  112,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "arg",
                "path": "groupNum"
              }
            ]
          }
        },
        {
          "name": "creator",
          "signer": true
        },
        {
          "name": "insuranceMint"
        },
        {
          "name": "insuranceVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  73,
                  110,
                  115,
                  117,
                  114,
                  97,
                  110,
                  99,
                  101,
                  86,
                  97,
                  117,
                  108,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "groupNum",
          "type": "u32"
        },
        {
          "name": "testing",
          "type": "u8"
        },
        {
          "name": "version",
          "type": "u8"
        }
      ]
    },
    {
      "name": "groupEdit",
      "discriminator": [
        8,
        88,
        183,
        249,
        166,
        115,
        55,
        227
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "adminOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "fastListingAdminOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "securityAdminOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "testingOpt",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "versionOpt",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "depositLimitQuoteOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "buybackFeesOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "buybackFeesBonusFactorOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "buybackFeesSwapMangoAccountOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "mngoTokenIndexOpt",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "buybackFeesExpiryIntervalOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "allowedFastListingsPerIntervalOpt",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "collateralFeeIntervalOpt",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "groupWithdrawInsuranceFund",
      "discriminator": [
        73,
        95,
        63,
        105,
        65,
        199,
        183,
        210
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "insuranceVault",
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "groupChangeInsuranceFund",
      "discriminator": [
        40,
        243,
        193,
        24,
        110,
        52,
        192,
        157
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "insuranceVault",
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "withdrawDestination",
          "writable": true
        },
        {
          "name": "newInsuranceMint"
        },
        {
          "name": "newInsuranceVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  73,
                  110,
                  115,
                  117,
                  114,
                  97,
                  110,
                  99,
                  101,
                  86,
                  97,
                  117,
                  108,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "newInsuranceMint",
                "account": "mint"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": []
    },
    {
      "name": "ixGateSet",
      "discriminator": [
        201,
        177,
        85,
        98,
        47,
        221,
        138,
        248
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "ixGate",
          "type": "u128"
        }
      ]
    },
    {
      "name": "groupClose",
      "discriminator": [
        67,
        126,
        10,
        224,
        9,
        121,
        98,
        124
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin",
            "insuranceVault"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "tokenRegister",
      "discriminator": [
        109,
        28,
        135,
        58,
        162,
        214,
        113,
        38
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "bank",
          "writable": true
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "mintInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  77,
                  105,
                  110,
                  116,
                  73,
                  110,
                  102,
                  111,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "mint",
                "account": "mint"
              }
            ]
          }
        },
        {
          "name": "oracle"
        },
        {
          "name": "fallbackOracle"
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": "u16"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "oracleConfig",
          "type": {
            "defined": {
              "name": "oracleConfigParams"
            }
          }
        },
        {
          "name": "interestRateParams",
          "type": {
            "defined": {
              "name": "interestRateParams"
            }
          }
        },
        {
          "name": "loanFeeRate",
          "type": "f32"
        },
        {
          "name": "loanOriginationFeeRate",
          "type": "f32"
        },
        {
          "name": "maintAssetWeight",
          "type": "f32"
        },
        {
          "name": "initAssetWeight",
          "type": "f32"
        },
        {
          "name": "maintLiabWeight",
          "type": "f32"
        },
        {
          "name": "initLiabWeight",
          "type": "f32"
        },
        {
          "name": "liquidationFee",
          "type": "f32"
        },
        {
          "name": "stablePriceDelayIntervalSeconds",
          "type": "u32"
        },
        {
          "name": "stablePriceDelayGrowthLimit",
          "type": "f32"
        },
        {
          "name": "stablePriceGrowthLimit",
          "type": "f32"
        },
        {
          "name": "minVaultToDepositsRatio",
          "type": "f64"
        },
        {
          "name": "netBorrowLimitWindowSizeTs",
          "type": "u64"
        },
        {
          "name": "netBorrowLimitPerWindowQuote",
          "type": "i64"
        },
        {
          "name": "borrowWeightScaleStartQuote",
          "type": "f64"
        },
        {
          "name": "depositWeightScaleStartQuote",
          "type": "f64"
        },
        {
          "name": "reduceOnly",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapTakerFeeRate",
          "type": "f32"
        },
        {
          "name": "tokenConditionalSwapMakerFeeRate",
          "type": "f32"
        },
        {
          "name": "flashLoanSwapFeeRate",
          "type": "f32"
        },
        {
          "name": "interestCurveScaling",
          "type": "f32"
        },
        {
          "name": "interestTargetUtilization",
          "type": "f32"
        },
        {
          "name": "groupInsuranceFund",
          "type": "bool"
        },
        {
          "name": "depositLimit",
          "type": "u64"
        },
        {
          "name": "zeroUtilRate",
          "type": "f32"
        },
        {
          "name": "platformLiquidationFee",
          "type": "f32"
        },
        {
          "name": "disableAssetLiquidation",
          "type": "bool"
        },
        {
          "name": "collateralFeePerDay",
          "type": "f32"
        },
        {
          "name": "tier",
          "type": "string"
        }
      ]
    },
    {
      "name": "tokenRegisterTrustless",
      "discriminator": [
        56,
        45,
        35,
        13,
        253,
        254,
        58,
        80
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "bank",
          "writable": true
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "mintInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  77,
                  105,
                  110,
                  116,
                  73,
                  110,
                  102,
                  111,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "mint",
                "account": "mint"
              }
            ]
          }
        },
        {
          "name": "oracle"
        },
        {
          "name": "fallbackOracle"
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": "u16"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "tokenEdit",
      "discriminator": [
        145,
        204,
        11,
        209,
        174,
        134,
        79,
        62
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mintInfo",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "fallbackOracle"
        }
      ],
      "args": [
        {
          "name": "oracleOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "oracleConfigOpt",
          "type": {
            "option": {
              "defined": {
                "name": "oracleConfigParams"
              }
            }
          }
        },
        {
          "name": "groupInsuranceFundOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "interestRateParamsOpt",
          "type": {
            "option": {
              "defined": {
                "name": "interestRateParams"
              }
            }
          }
        },
        {
          "name": "loanFeeRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "loanOriginationFeeRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "initAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintLiabWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "initLiabWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "liquidationFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "stablePriceDelayIntervalSecondsOpt",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "stablePriceDelayGrowthLimitOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "stablePriceGrowthLimitOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "minVaultToDepositsRatioOpt",
          "type": {
            "option": "f64"
          }
        },
        {
          "name": "netBorrowLimitPerWindowQuoteOpt",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "netBorrowLimitWindowSizeTsOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "borrowWeightScaleStartQuoteOpt",
          "type": {
            "option": "f64"
          }
        },
        {
          "name": "depositWeightScaleStartQuoteOpt",
          "type": {
            "option": "f64"
          }
        },
        {
          "name": "resetStablePrice",
          "type": "bool"
        },
        {
          "name": "resetNetBorrowLimit",
          "type": "bool"
        },
        {
          "name": "reduceOnlyOpt",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "nameOpt",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "forceCloseOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "tokenConditionalSwapTakerFeeRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "tokenConditionalSwapMakerFeeRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "flashLoanSwapFeeRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "interestCurveScalingOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "interestTargetUtilizationOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintWeightShiftStartOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maintWeightShiftEndOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "maintWeightShiftAssetTargetOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintWeightShiftLiabTargetOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintWeightShiftAbort",
          "type": "bool"
        },
        {
          "name": "setFallbackOracle",
          "type": "bool"
        },
        {
          "name": "depositLimitOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "zeroUtilRateOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "platformLiquidationFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "disableAssetLiquidationOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "collateralFeePerDayOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "forceWithdrawOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "tierOpt",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "tokenAddBank",
      "discriminator": [
        163,
        88,
        234,
        31,
        129,
        222,
        3,
        36
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "existingBank",
          "relations": [
            "group",
            "mint"
          ]
        },
        {
          "name": "bank",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  66,
                  97,
                  110,
                  107,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "arg",
                "path": "tokenIndex"
              },
              {
                "kind": "arg",
                "path": "bankNum"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  86,
                  97,
                  117,
                  108,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "arg",
                "path": "tokenIndex"
              },
              {
                "kind": "arg",
                "path": "bankNum"
              }
            ]
          }
        },
        {
          "name": "mintInfo",
          "writable": true,
          "relations": [
            "group",
            "mint"
          ]
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": "u16"
        },
        {
          "name": "bankNum",
          "type": "u32"
        }
      ]
    },
    {
      "name": "tokenDeregister",
      "discriminator": [
        82,
        102,
        38,
        67,
        135,
        199,
        132,
        46
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mintInfo",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "dustVault",
          "writable": true
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "tokenUpdateIndexAndRate",
      "discriminator": [
        131,
        136,
        194,
        39,
        11,
        50,
        10,
        198
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "mintInfo",
          "relations": [
            "oracle",
            "group"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "instructions"
        }
      ],
      "args": []
    },
    {
      "name": "tokenUpdateIndexAndRateResilient",
      "discriminator": [
        141,
        6,
        38,
        182,
        206,
        179,
        89,
        81
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "mintInfo",
          "relations": [
            "oracle",
            "group"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "instructions"
        }
      ],
      "args": []
    },
    {
      "name": "accountCreate",
      "discriminator": [
        198,
        95,
        39,
        197,
        41,
        214,
        157,
        18
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  77,
                  97,
                  110,
                  103,
                  111,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "owner"
              },
              {
                "kind": "arg",
                "path": "accountNum"
              }
            ]
          }
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "accountNum",
          "type": "u32"
        },
        {
          "name": "tokenCount",
          "type": "u8"
        },
        {
          "name": "serum3Count",
          "type": "u8"
        },
        {
          "name": "perpCount",
          "type": "u8"
        },
        {
          "name": "perpOoCount",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "accountCreateV2",
      "discriminator": [
        194,
        136,
        86,
        167,
        249,
        134,
        199,
        178
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  77,
                  97,
                  110,
                  103,
                  111,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "owner"
              },
              {
                "kind": "arg",
                "path": "accountNum"
              }
            ]
          }
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "accountNum",
          "type": "u32"
        },
        {
          "name": "tokenCount",
          "type": "u8"
        },
        {
          "name": "serum3Count",
          "type": "u8"
        },
        {
          "name": "perpCount",
          "type": "u8"
        },
        {
          "name": "perpOoCount",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapCount",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "accountExpand",
      "discriminator": [
        88,
        212,
        31,
        116,
        253,
        201,
        81,
        1
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group",
            "owner"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "tokenCount",
          "type": "u8"
        },
        {
          "name": "serum3Count",
          "type": "u8"
        },
        {
          "name": "perpCount",
          "type": "u8"
        },
        {
          "name": "perpOoCount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "accountExpandV2",
      "discriminator": [
        18,
        214,
        218,
        79,
        166,
        102,
        115,
        253
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group",
            "owner"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "tokenCount",
          "type": "u8"
        },
        {
          "name": "serum3Count",
          "type": "u8"
        },
        {
          "name": "perpCount",
          "type": "u8"
        },
        {
          "name": "perpOoCount",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapCount",
          "type": "u8"
        }
      ]
    },
    {
      "name": "accountSizeMigration",
      "discriminator": [
        107,
        58,
        153,
        247,
        158,
        35,
        89,
        66
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": []
    },
    {
      "name": "accountEdit",
      "discriminator": [
        186,
        211,
        205,
        183,
        115,
        93,
        24,
        161
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group",
            "owner"
          ]
        },
        {
          "name": "owner",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "nameOpt",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "delegateOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "temporaryDelegateOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "temporaryDelegateExpiryOpt",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "accountToggleFreeze",
      "discriminator": [
        11,
        243,
        233,
        247,
        87,
        79,
        96,
        198
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "freeze",
          "type": "bool"
        }
      ]
    },
    {
      "name": "accountClose",
      "discriminator": [
        115,
        5,
        192,
        28,
        86,
        221,
        137,
        102
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group",
            "owner"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "forceClose",
          "type": "bool"
        }
      ]
    },
    {
      "name": "accountBuybackFeesWithMngo",
      "discriminator": [
        12,
        25,
        66,
        139,
        22,
        96,
        102,
        193
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "daoAccount",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "mngoBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "mngoOracle"
        },
        {
          "name": "feesBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "feesOracle"
        }
      ],
      "args": [
        {
          "name": "maxBuybackUsd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sequenceCheck",
      "discriminator": [
        163,
        130,
        217,
        243,
        132,
        24,
        110,
        14
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group",
            "owner"
          ]
        },
        {
          "name": "owner",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "expectedSequenceNumber",
          "type": "u8"
        }
      ]
    },
    {
      "name": "healthCheck",
      "discriminator": [
        115,
        90,
        99,
        168,
        138,
        18,
        157,
        131
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "minHealthValue",
          "type": "f64"
        },
        {
          "name": "checkKind",
          "type": {
            "defined": {
              "name": "healthCheckKind"
            }
          }
        }
      ]
    },
    {
      "name": "stubOracleCreate",
      "discriminator": [
        172,
        63,
        101,
        83,
        141,
        76,
        199,
        216
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "oracle",
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "stubOracleClose",
      "discriminator": [
        92,
        137,
        45,
        3,
        45,
        60,
        117,
        224
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "oracle",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "stubOracleSet",
      "discriminator": [
        109,
        198,
        79,
        121,
        65,
        202,
        161,
        142
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "oracle",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "stubOracleSetTest",
      "discriminator": [
        95,
        162,
        128,
        220,
        139,
        2,
        238,
        213
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "oracle",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        },
        {
          "name": "lastUpdateSlot",
          "type": "u64"
        },
        {
          "name": "deviation",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "tokenDeposit",
      "discriminator": [
        117,
        255,
        154,
        71,
        245,
        58,
        95,
        89
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault",
            "oracle"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "tokenAuthority",
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        }
      ]
    },
    {
      "name": "tokenDepositIntoExisting",
      "discriminator": [
        13,
        37,
        220,
        68,
        23,
        21,
        42,
        137
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault",
            "oracle"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "tokenAuthority",
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        }
      ]
    },
    {
      "name": "tokenWithdraw",
      "discriminator": [
        63,
        223,
        42,
        59,
        15,
        128,
        102,
        66
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault",
            "oracle"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "tokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "allowBorrow",
          "type": "bool"
        }
      ]
    },
    {
      "name": "flashLoanBegin",
      "discriminator": [
        81,
        78,
        224,
        60,
        244,
        56,
        90,
        239
      ],
      "accounts": [
        {
          "name": "account"
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "instructions"
        }
      ],
      "args": [
        {
          "name": "loanAmounts",
          "type": {
            "vec": "u64"
          }
        }
      ]
    },
    {
      "name": "flashLoanSwapBegin",
      "discriminator": [
        100,
        172,
        217,
        95,
        115,
        152,
        67,
        102
      ],
      "accounts": [
        {
          "name": "account"
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "inputMint"
        },
        {
          "name": "outputMint"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram"
        },
        {
          "name": "instructions"
        }
      ],
      "args": [
        {
          "name": "loanAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "flashLoanEnd",
      "discriminator": [
        178,
        170,
        2,
        78,
        240,
        23,
        190,
        178
      ],
      "accounts": [
        {
          "name": "account",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "flashLoanType",
          "type": {
            "defined": {
              "name": "flashLoanType"
            }
          }
        }
      ]
    },
    {
      "name": "flashLoanEndV2",
      "discriminator": [
        38,
        171,
        16,
        3,
        140,
        247,
        119,
        197
      ],
      "accounts": [
        {
          "name": "account",
          "writable": true
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "numLoans",
          "type": "u8"
        },
        {
          "name": "flashLoanType",
          "type": {
            "defined": {
              "name": "flashLoanType"
            }
          }
        }
      ]
    },
    {
      "name": "healthRegionBegin",
      "discriminator": [
        61,
        67,
        53,
        198,
        139,
        132,
        211,
        44
      ],
      "accounts": [
        {
          "name": "instructions"
        },
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "healthRegionEnd",
      "discriminator": [
        26,
        180,
        234,
        112,
        58,
        65,
        8,
        246
      ],
      "accounts": [
        {
          "name": "account",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "serum3RegisterMarket",
      "discriminator": [
        40,
        14,
        109,
        120,
        222,
        156,
        209,
        0
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal"
        },
        {
          "name": "serumMarket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  83,
                  101,
                  114,
                  117,
                  109,
                  51,
                  77,
                  97,
                  114,
                  107,
                  101,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "serumMarketExternal"
              }
            ]
          }
        },
        {
          "name": "indexReservation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  83,
                  101,
                  114,
                  117,
                  109,
                  51,
                  73,
                  110,
                  100,
                  101,
                  120,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "arg",
                "path": "marketIndex"
              }
            ]
          }
        },
        {
          "name": "quoteBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "marketIndex",
          "type": "u16"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "oraclePriceBand",
          "type": "f32"
        }
      ]
    },
    {
      "name": "serum3EditMarket",
      "discriminator": [
        49,
        115,
        255,
        23,
        82,
        9,
        94,
        126
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "market",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "reduceOnlyOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "forceCloseOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "nameOpt",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "oraclePriceBandOpt",
          "type": {
            "option": "f32"
          }
        }
      ]
    },
    {
      "name": "serum3DeregisterMarket",
      "discriminator": [
        17,
        164,
        42,
        222,
        151,
        160,
        24,
        181
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "serumMarket",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "indexReservation",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "serum3CreateOpenOrders",
      "discriminator": [
        4,
        244,
        35,
        40,
        85,
        83,
        203,
        250
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal"
        },
        {
          "name": "openOrders",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  83,
                  101,
                  114,
                  117,
                  109,
                  51,
                  79,
                  79,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "account"
              },
              {
                "kind": "account",
                "path": "serumMarket"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": []
    },
    {
      "name": "serum3CloseOpenOrders",
      "discriminator": [
        255,
        137,
        122,
        253,
        241,
        38,
        238,
        136
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal"
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "solDestination",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "serum3PlaceOrder",
      "discriminator": [
        97,
        29,
        123,
        199,
        228,
        20,
        184,
        252
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        },
        {
          "name": "marketRequestQueue",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "payerBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "payerVault",
          "writable": true
        },
        {
          "name": "payerOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "serum3Side"
            }
          }
        },
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        },
        {
          "name": "maxNativeQuoteQtyIncludingFees",
          "type": "u64"
        },
        {
          "name": "selfTradeBehavior",
          "type": {
            "defined": {
              "name": "serum3SelfTradeBehavior"
            }
          }
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "serum3OrderType"
            }
          }
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "serum3PlaceOrderV2",
      "discriminator": [
        117,
        224,
        214,
        0,
        113,
        127,
        133,
        145
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        },
        {
          "name": "marketRequestQueue",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "payerBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "payerVault",
          "writable": true
        },
        {
          "name": "payerOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "serum3Side"
            }
          }
        },
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        },
        {
          "name": "maxNativeQuoteQtyIncludingFees",
          "type": "u64"
        },
        {
          "name": "selfTradeBehavior",
          "type": {
            "defined": {
              "name": "serum3SelfTradeBehavior"
            }
          }
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "serum3OrderType"
            }
          }
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "serum3CancelOrder",
      "discriminator": [
        126,
        114,
        109,
        22,
        198,
        12,
        124,
        75
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "serum3Side"
            }
          }
        },
        {
          "name": "orderId",
          "type": "u128"
        }
      ]
    },
    {
      "name": "serum3CancelOrderByClientOrderId",
      "discriminator": [
        209,
        47,
        29,
        183,
        30,
        253,
        220,
        68
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "clientOrderId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "serum3CancelAllOrders",
      "discriminator": [
        241,
        252,
        14,
        5,
        245,
        128,
        2,
        172
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "serum3SettleFunds",
      "discriminator": [
        85,
        60,
        105,
        229,
        226,
        51,
        37,
        107
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "quoteBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "baseBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "serum3SettleFundsV2",
      "discriminator": [
        5,
        221,
        107,
        23,
        247,
        211,
        47,
        221
      ],
      "accounts": [
        {
          "name": "v1",
          "accounts": [
            {
              "name": "group"
            },
            {
              "name": "account",
              "writable": true,
              "relations": [
                "group"
              ]
            },
            {
              "name": "owner",
              "signer": true
            },
            {
              "name": "openOrders",
              "writable": true
            },
            {
              "name": "serumMarket",
              "relations": [
                "group",
                "serumProgram",
                "serumMarketExternal"
              ]
            },
            {
              "name": "serumProgram"
            },
            {
              "name": "serumMarketExternal",
              "writable": true
            },
            {
              "name": "marketBaseVault",
              "writable": true
            },
            {
              "name": "marketQuoteVault",
              "writable": true
            },
            {
              "name": "marketVaultSigner",
              "docs": [
                "needed for the automatic settle_funds call"
              ]
            },
            {
              "name": "quoteBank",
              "writable": true,
              "relations": [
                "group"
              ]
            },
            {
              "name": "quoteVault",
              "writable": true
            },
            {
              "name": "baseBank",
              "writable": true,
              "relations": [
                "group"
              ]
            },
            {
              "name": "baseVault",
              "writable": true
            },
            {
              "name": "tokenProgram"
            }
          ]
        },
        {
          "name": "v2",
          "accounts": [
            {
              "name": "quoteOracle"
            },
            {
              "name": "baseOracle"
            }
          ]
        }
      ],
      "args": [
        {
          "name": "feesToDao",
          "type": "bool"
        }
      ]
    },
    {
      "name": "serum3LiqForceCancelOrders",
      "discriminator": [
        31,
        170,
        95,
        93,
        88,
        54,
        9,
        231
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "serumMarket",
          "relations": [
            "group",
            "serumProgram",
            "serumMarketExternal"
          ]
        },
        {
          "name": "serumProgram"
        },
        {
          "name": "serumMarketExternal",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "quoteBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "baseBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "liqTokenWithToken",
      "discriminator": [
        67,
        127,
        152,
        152,
        211,
        208,
        251,
        226
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "assetTokenIndex",
          "type": "u16"
        },
        {
          "name": "liabTokenIndex",
          "type": "u16"
        },
        {
          "name": "maxLiabTransfer",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "liqTokenBankruptcy",
      "discriminator": [
        105,
        171,
        223,
        68,
        107,
        62,
        12,
        243
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "insuranceVault"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liabMintInfo",
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "maxLiabTransfer",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "tokenLiqWithToken",
      "discriminator": [
        6,
        52,
        83,
        20,
        216,
        127,
        64,
        102
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "assetTokenIndex",
          "type": "u16"
        },
        {
          "name": "liabTokenIndex",
          "type": "u16"
        },
        {
          "name": "maxLiabTransfer",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "tokenForceCloseBorrowsWithToken",
      "discriminator": [
        105,
        167,
        73,
        180,
        243,
        189,
        105,
        82
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "assetTokenIndex",
          "type": "u16"
        },
        {
          "name": "liabTokenIndex",
          "type": "u16"
        },
        {
          "name": "maxLiabTransfer",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenLiqBankruptcy",
      "discriminator": [
        122,
        110,
        203,
        15,
        8,
        117,
        164,
        70
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "insuranceVault"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liabMintInfo",
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "maxLiabTransfer",
          "type": {
            "defined": {
              "name": "i80f48"
            }
          }
        }
      ]
    },
    {
      "name": "tokenForceWithdraw",
      "discriminator": [
        237,
        116,
        98,
        44,
        126,
        159,
        233,
        23
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "bank",
          "writable": true,
          "relations": [
            "group",
            "vault",
            "oracle"
          ]
        },
        {
          "name": "vault",
          "writable": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "ownerAtaTokenAccount",
          "writable": true
        },
        {
          "name": "alternateOwnerTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "perpCreateMarket",
      "discriminator": [
        93,
        47,
        45,
        195,
        62,
        252,
        32,
        34
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  80,
                  101,
                  114,
                  112,
                  77,
                  97,
                  114,
                  107,
                  101,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "arg",
                "path": "perpMarketIndex"
              }
            ]
          }
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "perpMarketIndex",
          "type": "u16"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "oracleConfig",
          "type": {
            "defined": {
              "name": "oracleConfigParams"
            }
          }
        },
        {
          "name": "baseDecimals",
          "type": "u8"
        },
        {
          "name": "quoteLotSize",
          "type": "i64"
        },
        {
          "name": "baseLotSize",
          "type": "i64"
        },
        {
          "name": "maintBaseAssetWeight",
          "type": "f32"
        },
        {
          "name": "initBaseAssetWeight",
          "type": "f32"
        },
        {
          "name": "maintBaseLiabWeight",
          "type": "f32"
        },
        {
          "name": "initBaseLiabWeight",
          "type": "f32"
        },
        {
          "name": "maintOverallAssetWeight",
          "type": "f32"
        },
        {
          "name": "initOverallAssetWeight",
          "type": "f32"
        },
        {
          "name": "baseLiquidationFee",
          "type": "f32"
        },
        {
          "name": "makerFee",
          "type": "f32"
        },
        {
          "name": "takerFee",
          "type": "f32"
        },
        {
          "name": "minFunding",
          "type": "f32"
        },
        {
          "name": "maxFunding",
          "type": "f32"
        },
        {
          "name": "impactQuantity",
          "type": "i64"
        },
        {
          "name": "groupInsuranceFund",
          "type": "bool"
        },
        {
          "name": "feePenalty",
          "type": "f32"
        },
        {
          "name": "settleFeeFlat",
          "type": "f32"
        },
        {
          "name": "settleFeeAmountThreshold",
          "type": "f32"
        },
        {
          "name": "settleFeeFractionLowHealth",
          "type": "f32"
        },
        {
          "name": "settleTokenIndex",
          "type": "u16"
        },
        {
          "name": "settlePnlLimitFactor",
          "type": "f32"
        },
        {
          "name": "settlePnlLimitWindowSizeTs",
          "type": "u64"
        },
        {
          "name": "positivePnlLiquidationFee",
          "type": "f32"
        },
        {
          "name": "platformLiquidationFee",
          "type": "f32"
        }
      ]
    },
    {
      "name": "perpEditMarket",
      "discriminator": [
        124,
        114,
        160,
        231,
        69,
        223,
        76,
        81
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "oracle"
        }
      ],
      "args": [
        {
          "name": "oracleOpt",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "oracleConfigOpt",
          "type": {
            "option": {
              "defined": {
                "name": "oracleConfigParams"
              }
            }
          }
        },
        {
          "name": "baseDecimalsOpt",
          "type": {
            "option": "u8"
          }
        },
        {
          "name": "maintBaseAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "initBaseAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintBaseLiabWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "initBaseLiabWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maintOverallAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "initOverallAssetWeightOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "baseLiquidationFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "makerFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "takerFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "minFundingOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "maxFundingOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "impactQuantityOpt",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "groupInsuranceFundOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "feePenaltyOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "settleFeeFlatOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "settleFeeAmountThresholdOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "settleFeeFractionLowHealthOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "stablePriceDelayIntervalSecondsOpt",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "stablePriceDelayGrowthLimitOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "stablePriceGrowthLimitOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "settlePnlLimitFactorOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "settlePnlLimitWindowSizeTsOpt",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "reduceOnlyOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "resetStablePrice",
          "type": "bool"
        },
        {
          "name": "positivePnlLiquidationFeeOpt",
          "type": {
            "option": "f32"
          }
        },
        {
          "name": "nameOpt",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "forceCloseOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "platformLiquidationFeeOpt",
          "type": {
            "option": "f32"
          }
        }
      ]
    },
    {
      "name": "perpCloseMarket",
      "discriminator": [
        226,
        238,
        187,
        17,
        160,
        153,
        254,
        160
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "eventQueue"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "perpDeactivatePosition",
      "discriminator": [
        140,
        84,
        243,
        249,
        29,
        148,
        18,
        29
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "relations": [
            "group"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "perpPlaceOrder",
      "discriminator": [
        189,
        196,
        225,
        201,
        114,
        172,
        25,
        166
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "eventQueue",
            "oracle"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "oracle"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "side"
            }
          }
        },
        {
          "name": "priceLots",
          "type": "i64"
        },
        {
          "name": "maxBaseLots",
          "type": "i64"
        },
        {
          "name": "maxQuoteLots",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "placeOrderType"
            }
          }
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        }
      ],
      "returns": {
        "option": "u128"
      }
    },
    {
      "name": "perpPlaceOrderV2",
      "discriminator": [
        232,
        224,
        154,
        78,
        158,
        184,
        6,
        219
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "eventQueue",
            "oracle"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "oracle"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "side"
            }
          }
        },
        {
          "name": "priceLots",
          "type": "i64"
        },
        {
          "name": "maxBaseLots",
          "type": "i64"
        },
        {
          "name": "maxQuoteLots",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "placeOrderType"
            }
          }
        },
        {
          "name": "selfTradeBehavior",
          "type": {
            "defined": {
              "name": "selfTradeBehavior"
            }
          }
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        }
      ],
      "returns": {
        "option": "u128"
      }
    },
    {
      "name": "perpPlaceOrderPegged",
      "discriminator": [
        192,
        60,
        153,
        162,
        246,
        200,
        50,
        87
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "eventQueue",
            "oracle"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "oracle"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "side"
            }
          }
        },
        {
          "name": "priceOffsetLots",
          "type": "i64"
        },
        {
          "name": "pegLimit",
          "type": "i64"
        },
        {
          "name": "maxBaseLots",
          "type": "i64"
        },
        {
          "name": "maxQuoteLots",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "placeOrderType"
            }
          }
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        },
        {
          "name": "maxOracleStalenessSlots",
          "type": "i32"
        }
      ],
      "returns": {
        "option": "u128"
      }
    },
    {
      "name": "perpPlaceOrderPeggedV2",
      "discriminator": [
        227,
        113,
        197,
        122,
        249,
        111,
        71,
        93
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "eventQueue",
            "oracle"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventQueue",
          "writable": true
        },
        {
          "name": "oracle"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": {
              "name": "side"
            }
          }
        },
        {
          "name": "priceOffsetLots",
          "type": "i64"
        },
        {
          "name": "pegLimit",
          "type": "i64"
        },
        {
          "name": "maxBaseLots",
          "type": "i64"
        },
        {
          "name": "maxQuoteLots",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": {
              "name": "placeOrderType"
            }
          }
        },
        {
          "name": "selfTradeBehavior",
          "type": {
            "defined": {
              "name": "selfTradeBehavior"
            }
          }
        },
        {
          "name": "reduceOnly",
          "type": "bool"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        },
        {
          "name": "maxOracleStalenessSlots",
          "type": "i32"
        }
      ],
      "returns": {
        "option": "u128"
      }
    },
    {
      "name": "perpCancelOrder",
      "discriminator": [
        233,
        9,
        189,
        68,
        224,
        163,
        245,
        193
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "orderId",
          "type": "u128"
        }
      ]
    },
    {
      "name": "perpCancelOrderByClientOrderId",
      "discriminator": [
        74,
        250,
        56,
        79,
        206,
        173,
        163,
        102
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "clientOrderId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "perpCancelAllOrders",
      "discriminator": [
        96,
        16,
        226,
        181,
        107,
        145,
        224,
        213
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "perpCancelAllOrdersBySide",
      "discriminator": [
        51,
        248,
        204,
        125,
        101,
        182,
        107,
        146
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "sideOption",
          "type": {
            "option": {
              "defined": {
                "name": "side"
              }
            }
          }
        },
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "perpConsumeEvents",
      "discriminator": [
        158,
        85,
        29,
        209,
        56,
        235,
        32,
        37
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "eventQueue"
          ]
        },
        {
          "name": "eventQueue",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "perpUpdateFunding",
      "discriminator": [
        28,
        18,
        184,
        70,
        7,
        245,
        14,
        46
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks",
            "oracle"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "oracle"
        }
      ],
      "args": []
    },
    {
      "name": "perpSettlePnl",
      "discriminator": [
        245,
        98,
        85,
        179,
        230,
        215,
        130,
        57
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "settler",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settlerOwner",
          "signer": true
        },
        {
          "name": "perpMarket",
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "accountA",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "accountB",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "settleBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleOracle"
        }
      ],
      "args": []
    },
    {
      "name": "perpForceClosePosition",
      "discriminator": [
        251,
        82,
        230,
        144,
        154,
        96,
        85,
        15
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "accountA",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "accountB",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "oracle"
        }
      ],
      "args": []
    },
    {
      "name": "perpSettleFees",
      "discriminator": [
        223,
        237,
        227,
        72,
        152,
        185,
        234,
        115
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "settleBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleOracle"
        }
      ],
      "args": [
        {
          "name": "maxSettleAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "perpLiqBaseOrPositivePnl",
      "discriminator": [
        107,
        170,
        93,
        139,
        192,
        141,
        121,
        205
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleVault",
          "writable": true
        },
        {
          "name": "settleOracle"
        }
      ],
      "args": [
        {
          "name": "maxBaseTransfer",
          "type": "i64"
        },
        {
          "name": "maxPnlTransfer",
          "type": "u64"
        }
      ]
    },
    {
      "name": "perpLiqForceCancelOrders",
      "discriminator": [
        109,
        203,
        186,
        16,
        233,
        91,
        1,
        141
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "perpLiqNegativePnlOrBankruptcy",
      "discriminator": [
        31,
        175,
        214,
        180,
        117,
        227,
        152,
        53
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "insuranceVault"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "settleBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleVault",
          "writable": true
        },
        {
          "name": "settleOracle"
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "maxLiabTransfer",
          "type": "u64"
        }
      ]
    },
    {
      "name": "perpLiqNegativePnlOrBankruptcyV2",
      "discriminator": [
        22,
        35,
        71,
        81,
        154,
        191,
        48,
        45
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "insuranceVault"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorOwner",
          "signer": true
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "perpMarket",
          "writable": true,
          "relations": [
            "group",
            "oracle"
          ]
        },
        {
          "name": "oracle"
        },
        {
          "name": "settleBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "settleVault",
          "writable": true
        },
        {
          "name": "settleOracle"
        },
        {
          "name": "insuranceVault",
          "writable": true
        },
        {
          "name": "insuranceBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "insuranceBankVault",
          "writable": true
        },
        {
          "name": "insuranceOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "maxLiabTransfer",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapCreate",
      "discriminator": [
        86,
        253,
        254,
        74,
        234,
        85,
        193,
        89
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "buyBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "sellBank",
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "maxBuy",
          "type": "u64"
        },
        {
          "name": "maxSell",
          "type": "u64"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "priceLowerLimit",
          "type": "f64"
        },
        {
          "name": "priceUpperLimit",
          "type": "f64"
        },
        {
          "name": "pricePremiumRate",
          "type": "f64"
        },
        {
          "name": "allowCreatingDeposits",
          "type": "bool"
        },
        {
          "name": "allowCreatingBorrows",
          "type": "bool"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapCreateV2",
      "discriminator": [
        178,
        144,
        36,
        13,
        168,
        102,
        193,
        65
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "buyBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "sellBank",
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "maxBuy",
          "type": "u64"
        },
        {
          "name": "maxSell",
          "type": "u64"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "priceLowerLimit",
          "type": "f64"
        },
        {
          "name": "priceUpperLimit",
          "type": "f64"
        },
        {
          "name": "pricePremiumRate",
          "type": "f64"
        },
        {
          "name": "allowCreatingDeposits",
          "type": "bool"
        },
        {
          "name": "allowCreatingBorrows",
          "type": "bool"
        },
        {
          "name": "displayPriceStyle",
          "type": {
            "defined": {
              "name": "tokenConditionalSwapDisplayPriceStyle"
            }
          }
        },
        {
          "name": "intention",
          "type": {
            "defined": {
              "name": "tokenConditionalSwapIntention"
            }
          }
        }
      ]
    },
    {
      "name": "tokenConditionalSwapCreatePremiumAuction",
      "discriminator": [
        32,
        160,
        122,
        231,
        188,
        5,
        161,
        236
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "buyBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "sellBank",
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "maxBuy",
          "type": "u64"
        },
        {
          "name": "maxSell",
          "type": "u64"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "priceLowerLimit",
          "type": "f64"
        },
        {
          "name": "priceUpperLimit",
          "type": "f64"
        },
        {
          "name": "maxPricePremiumRate",
          "type": "f64"
        },
        {
          "name": "allowCreatingDeposits",
          "type": "bool"
        },
        {
          "name": "allowCreatingBorrows",
          "type": "bool"
        },
        {
          "name": "displayPriceStyle",
          "type": {
            "defined": {
              "name": "tokenConditionalSwapDisplayPriceStyle"
            }
          }
        },
        {
          "name": "intention",
          "type": {
            "defined": {
              "name": "tokenConditionalSwapIntention"
            }
          }
        },
        {
          "name": "durationSeconds",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapCreateLinearAuction",
      "discriminator": [
        94,
        237,
        56,
        218,
        200,
        218,
        158,
        133
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "buyBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "sellBank",
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "maxBuy",
          "type": "u64"
        },
        {
          "name": "maxSell",
          "type": "u64"
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "priceStart",
          "type": "f64"
        },
        {
          "name": "priceEnd",
          "type": "f64"
        },
        {
          "name": "allowCreatingDeposits",
          "type": "bool"
        },
        {
          "name": "allowCreatingBorrows",
          "type": "bool"
        },
        {
          "name": "displayPriceStyle",
          "type": {
            "defined": {
              "name": "tokenConditionalSwapDisplayPriceStyle"
            }
          }
        },
        {
          "name": "startTimestamp",
          "type": "u64"
        },
        {
          "name": "durationSeconds",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapCancel",
      "discriminator": [
        130,
        209,
        83,
        57,
        239,
        255,
        162,
        206
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "buyBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "sellBank",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "tokenConditionalSwapIndex",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapTrigger",
      "discriminator": [
        184,
        19,
        239,
        205,
        190,
        223,
        39,
        158
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "tokenConditionalSwapIndex",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapId",
          "type": "u64"
        },
        {
          "name": "maxBuyTokenToLiqee",
          "type": "u64"
        },
        {
          "name": "maxSellTokenToLiqor",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapTriggerV2",
      "discriminator": [
        227,
        184,
        148,
        176,
        233,
        142,
        191,
        62
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "tokenConditionalSwapIndex",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapId",
          "type": "u64"
        },
        {
          "name": "maxBuyTokenToLiqee",
          "type": "u64"
        },
        {
          "name": "maxSellTokenToLiqor",
          "type": "u64"
        },
        {
          "name": "minBuyToken",
          "type": "u64"
        },
        {
          "name": "minTakerPrice",
          "type": "f32"
        }
      ]
    },
    {
      "name": "tokenConditionalSwapStart",
      "discriminator": [
        193,
        64,
        148,
        82,
        54,
        192,
        108,
        231
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "liqee",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqor",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "liqorAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "tokenConditionalSwapIndex",
          "type": "u8"
        },
        {
          "name": "tokenConditionalSwapId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenChargeCollateralFees",
      "discriminator": [
        121,
        244,
        31,
        193,
        98,
        247,
        78,
        59
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "altSet",
      "discriminator": [
        235,
        68,
        145,
        32,
        59,
        105,
        55,
        25
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "addressLookupTable",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        }
      ]
    },
    {
      "name": "altExtend",
      "discriminator": [
        124,
        51,
        47,
        90,
        68,
        66,
        25,
        98
      ],
      "accounts": [
        {
          "name": "group",
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "payer",
          "signer": true
        },
        {
          "name": "addressLookupTable",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u8"
        },
        {
          "name": "newAddresses",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "computeAccountData",
      "discriminator": [
        54,
        70,
        190,
        98,
        246,
        242,
        99,
        116
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "relations": [
            "group"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "openbookV2RegisterMarket",
      "discriminator": [
        20,
        222,
        70,
        93,
        204,
        215,
        174,
        23
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal"
        },
        {
          "name": "openbookV2Market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  79,
                  112,
                  101,
                  110,
                  98,
                  111,
                  111,
                  107,
                  86,
                  50,
                  77,
                  97,
                  114,
                  107,
                  101,
                  116,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "account",
                "path": "openbookV2MarketExternal"
              }
            ]
          }
        },
        {
          "name": "indexReservation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  79,
                  112,
                  101,
                  110,
                  98,
                  111,
                  111,
                  107,
                  86,
                  50,
                  73,
                  110,
                  100,
                  101,
                  120,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "group"
              },
              {
                "kind": "arg",
                "path": "marketIndex"
              }
            ]
          }
        },
        {
          "name": "quoteBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseBank",
          "relations": [
            "group"
          ]
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "marketIndex",
          "type": "u16"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "openbookV2EditMarket",
      "discriminator": [
        31,
        123,
        207,
        156,
        150,
        91,
        128,
        229
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "market",
          "writable": true,
          "relations": [
            "group"
          ]
        }
      ],
      "args": [
        {
          "name": "reduceOnlyOpt",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "forceCloseOpt",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "openbookV2DeregisterMarket",
      "discriminator": [
        194,
        109,
        192,
        174,
        116,
        125,
        232,
        184
      ],
      "accounts": [
        {
          "name": "group",
          "writable": true,
          "relations": [
            "admin"
          ]
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "openbookV2Market",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "indexReservation",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "solDestination",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "openbookV2CreateOpenOrders",
      "discriminator": [
        190,
        13,
        248,
        244,
        41,
        233,
        209,
        122
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal"
        },
        {
          "name": "openOrders",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  34,
                  79,
                  112,
                  101,
                  110,
                  79,
                  114,
                  100,
                  101,
                  114,
                  115,
                  34
                ]
              },
              {
                "kind": "account",
                "path": "openbookV2Market"
              },
              {
                "kind": "account",
                "path": "openbookV2MarketExternal"
              },
              {
                "kind": "arg",
                "path": "accountNum"
              }
            ],
            "program": {
              "kind": "account",
              "path": "openbookV2Program"
            }
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "accountNum",
          "type": "u32"
        }
      ]
    },
    {
      "name": "openbookV2CloseOpenOrders",
      "discriminator": [
        103,
        212,
        113,
        221,
        162,
        204,
        60,
        26
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal"
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "solDestination",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "openbookV2PlaceOrder",
      "discriminator": [
        205,
        124,
        204,
        223,
        211,
        251,
        220,
        89
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "openbookV2Market"
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "writable": true,
          "relations": [
            "bids",
            "asks",
            "eventHeap"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventHeap",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "payerBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "payerVault",
          "writable": true
        },
        {
          "name": "payerOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        },
        {
          "name": "maxNativeQuoteQtyIncludingFees",
          "type": "u64"
        },
        {
          "name": "selfTradeBehavior",
          "type": "u8"
        },
        {
          "name": "orderType",
          "type": "u8"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "openbookV2PlaceTakerOrder",
      "discriminator": [
        177,
        33,
        47,
        242,
        50,
        98,
        62,
        9
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "writable": true,
          "relations": [
            "bids",
            "asks",
            "eventHeap"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventHeap",
          "writable": true
        },
        {
          "name": "marketRequestQueue",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "payerBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "payerVault",
          "writable": true
        },
        {
          "name": "payerOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        },
        {
          "name": "maxNativeQuoteQtyIncludingFees",
          "type": "u64"
        },
        {
          "name": "selfTradeBehavior",
          "type": "u8"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "openbookV2CancelOrder",
      "discriminator": [
        163,
        103,
        146,
        4,
        68,
        13,
        184,
        81
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "relations": [
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "orderId",
          "type": "u128"
        }
      ]
    },
    {
      "name": "openbookV2SettleFunds",
      "discriminator": [
        28,
        62,
        2,
        143,
        244,
        59,
        28,
        100
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "quoteBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "baseBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteOracle"
        },
        {
          "name": "baseOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "feesToDao",
          "type": "bool"
        }
      ]
    },
    {
      "name": "openbookV2LiqForceCancelOrders",
      "discriminator": [
        128,
        8,
        48,
        39,
        12,
        14,
        243,
        202
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "relations": [
            "bids",
            "asks",
            "eventHeap"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        },
        {
          "name": "eventHeap",
          "writable": true
        },
        {
          "name": "marketBaseVault",
          "writable": true
        },
        {
          "name": "marketQuoteVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner"
        },
        {
          "name": "quoteBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "baseBank",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "openbookV2CancelAllOrders",
      "discriminator": [
        255,
        241,
        145,
        74,
        6,
        219,
        200,
        230
      ],
      "accounts": [
        {
          "name": "group"
        },
        {
          "name": "account",
          "writable": true,
          "relations": [
            "group"
          ]
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "openOrders",
          "writable": true
        },
        {
          "name": "openbookV2Market",
          "relations": [
            "group",
            "openbookV2Program",
            "openbookV2MarketExternal"
          ]
        },
        {
          "name": "openbookV2Program"
        },
        {
          "name": "openbookV2MarketExternal",
          "relations": [
            "bids",
            "asks"
          ]
        },
        {
          "name": "bids",
          "writable": true
        },
        {
          "name": "asks",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "benchmark",
      "discriminator": [
        121,
        118,
        59,
        220,
        86,
        141,
        166,
        122
      ],
      "accounts": [
        {
          "name": "dummy"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "bank",
      "discriminator": [
        142,
        49,
        166,
        242,
        50,
        66,
        97,
        188
      ]
    },
    {
      "name": "group",
      "discriminator": [
        209,
        249,
        208,
        63,
        182,
        89,
        186,
        254
      ]
    },
    {
      "name": "mangoAccount",
      "discriminator": [
        243,
        228,
        247,
        3,
        169,
        52,
        175,
        31
      ]
    },
    {
      "name": "mintInfo",
      "discriminator": [
        199,
        115,
        213,
        221,
        219,
        29,
        135,
        174
      ]
    },
    {
      "name": "openbookV2Market",
      "discriminator": [
        51,
        219,
        168,
        60,
        228,
        172,
        7,
        91
      ]
    },
    {
      "name": "openbookV2MarketIndexReservation",
      "discriminator": [
        209,
        194,
        247,
        31,
        168,
        30,
        131,
        129
      ]
    },
    {
      "name": "stubOracle",
      "discriminator": [
        224,
        251,
        254,
        99,
        177,
        174,
        137,
        4
      ]
    },
    {
      "name": "bookSide",
      "discriminator": [
        72,
        44,
        225,
        141,
        178,
        130,
        97,
        57
      ]
    },
    {
      "name": "eventQueue",
      "discriminator": [
        41,
        208,
        116,
        209,
        173,
        116,
        141,
        68
      ]
    },
    {
      "name": "perpMarket",
      "discriminator": [
        10,
        223,
        12,
        44,
        107,
        245,
        55,
        247
      ]
    },
    {
      "name": "serum3Market",
      "discriminator": [
        117,
        7,
        182,
        246,
        96,
        104,
        136,
        132
      ]
    },
    {
      "name": "serum3MarketIndexReservation",
      "discriminator": [
        246,
        16,
        198,
        100,
        239,
        112,
        120,
        53
      ]
    }
  ],
  "events": [
    {
      "name": "mangoAccountData",
      "discriminator": [
        95,
        36,
        59,
        37,
        31,
        162,
        237,
        191
      ]
    },
    {
      "name": "perpBalanceLog",
      "discriminator": [
        135,
        62,
        188,
        234,
        53,
        126,
        46,
        217
      ]
    },
    {
      "name": "tokenBalanceLog",
      "discriminator": [
        23,
        154,
        176,
        193,
        11,
        42,
        168,
        244
      ]
    },
    {
      "name": "flashLoanLog",
      "discriminator": [
        29,
        158,
        98,
        235,
        120,
        101,
        230,
        46
      ]
    },
    {
      "name": "flashLoanLogV2",
      "discriminator": [
        61,
        108,
        81,
        162,
        18,
        199,
        168,
        159
      ]
    },
    {
      "name": "flashLoanLogV3",
      "discriminator": [
        74,
        64,
        40,
        232,
        213,
        201,
        38,
        4
      ]
    },
    {
      "name": "withdrawLog",
      "discriminator": [
        235,
        69,
        115,
        62,
        185,
        172,
        126,
        223
      ]
    },
    {
      "name": "depositLog",
      "discriminator": [
        141,
        186,
        168,
        252,
        108,
        141,
        72,
        94
      ]
    },
    {
      "name": "fillLog",
      "discriminator": [
        150,
        23,
        41,
        148,
        152,
        162,
        215,
        64
      ]
    },
    {
      "name": "fillLogV2",
      "discriminator": [
        17,
        218,
        104,
        219,
        185,
        21,
        12,
        22
      ]
    },
    {
      "name": "fillLogV3",
      "discriminator": [
        175,
        13,
        227,
        17,
        190,
        150,
        87,
        4
      ]
    },
    {
      "name": "perpUpdateFundingLog",
      "discriminator": [
        191,
        31,
        61,
        66,
        172,
        98,
        156,
        22
      ]
    },
    {
      "name": "perpUpdateFundingLogV2",
      "discriminator": [
        117,
        146,
        131,
        74,
        179,
        154,
        219,
        178
      ]
    },
    {
      "name": "updateIndexLog",
      "discriminator": [
        12,
        139,
        206,
        103,
        41,
        254,
        215,
        56
      ]
    },
    {
      "name": "updateRateLog",
      "discriminator": [
        170,
        14,
        171,
        122,
        233,
        48,
        204,
        93
      ]
    },
    {
      "name": "updateRateLogV2",
      "discriminator": [
        228,
        184,
        251,
        193,
        74,
        151,
        129,
        158
      ]
    },
    {
      "name": "tokenLiqWithTokenLog",
      "discriminator": [
        131,
        216,
        33,
        79,
        60,
        6,
        240,
        109
      ]
    },
    {
      "name": "tokenLiqWithTokenLogV2",
      "discriminator": [
        203,
        39,
        4,
        9,
        97,
        13,
        99,
        172
      ]
    },
    {
      "name": "serum3OpenOrdersBalanceLog",
      "discriminator": [
        50,
        204,
        37,
        93,
        96,
        248,
        123,
        254
      ]
    },
    {
      "name": "serum3OpenOrdersBalanceLogV2",
      "discriminator": [
        236,
        56,
        131,
        3,
        3,
        5,
        250,
        249
      ]
    },
    {
      "name": "withdrawLoanOriginationFeeLog",
      "discriminator": [
        239,
        178,
        45,
        126,
        200,
        149,
        177,
        212
      ]
    },
    {
      "name": "withdrawLoanLog",
      "discriminator": [
        2,
        158,
        132,
        43,
        196,
        81,
        21,
        251
      ]
    },
    {
      "name": "tokenLiqBankruptcyLog",
      "discriminator": [
        140,
        63,
        3,
        74,
        183,
        9,
        166,
        160
      ]
    },
    {
      "name": "deactivateTokenPositionLog",
      "discriminator": [
        146,
        39,
        146,
        47,
        118,
        193,
        122,
        114
      ]
    },
    {
      "name": "deactivatePerpPositionLog",
      "discriminator": [
        194,
        158,
        10,
        83,
        229,
        76,
        210,
        147
      ]
    },
    {
      "name": "tokenMetaDataLog",
      "discriminator": [
        173,
        143,
        30,
        116,
        41,
        65,
        110,
        99
      ]
    },
    {
      "name": "tokenMetaDataLogV2",
      "discriminator": [
        189,
        1,
        171,
        106,
        207,
        185,
        191,
        128
      ]
    },
    {
      "name": "perpMarketMetaDataLog",
      "discriminator": [
        142,
        238,
        213,
        181,
        238,
        90,
        235,
        173
      ]
    },
    {
      "name": "serum3RegisterMarketLog",
      "discriminator": [
        215,
        97,
        165,
        34,
        153,
        106,
        109,
        121
      ]
    },
    {
      "name": "perpLiqBaseOrPositivePnlLog",
      "discriminator": [
        40,
        159,
        92,
        70,
        62,
        142,
        116,
        221
      ]
    },
    {
      "name": "perpLiqBaseOrPositivePnlLogV2",
      "discriminator": [
        111,
        115,
        99,
        111,
        57,
        194,
        215,
        32
      ]
    },
    {
      "name": "perpLiqBaseOrPositivePnlLogV3",
      "discriminator": [
        0,
        253,
        204,
        240,
        34,
        88,
        111,
        9
      ]
    },
    {
      "name": "perpLiqBankruptcyLog",
      "discriminator": [
        50,
        241,
        208,
        101,
        118,
        87,
        22,
        154
      ]
    },
    {
      "name": "perpLiqNegativePnlOrBankruptcyLog",
      "discriminator": [
        161,
        86,
        133,
        188,
        1,
        143,
        94,
        10
      ]
    },
    {
      "name": "perpSettlePnlLog",
      "discriminator": [
        5,
        115,
        223,
        4,
        144,
        143,
        161,
        21
      ]
    },
    {
      "name": "perpSettleFeesLog",
      "discriminator": [
        62,
        36,
        133,
        253,
        23,
        14,
        28,
        171
      ]
    },
    {
      "name": "accountBuybackFeesWithMngoLog",
      "discriminator": [
        163,
        50,
        153,
        76,
        235,
        137,
        75,
        240
      ]
    },
    {
      "name": "filledPerpOrderLog",
      "discriminator": [
        79,
        69,
        99,
        68,
        176,
        199,
        51,
        233
      ]
    },
    {
      "name": "perpTakerTradeLog",
      "discriminator": [
        26,
        211,
        180,
        33,
        161,
        247,
        205,
        160
      ]
    },
    {
      "name": "perpForceClosePositionLog",
      "discriminator": [
        56,
        60,
        57,
        88,
        57,
        83,
        166,
        218
      ]
    },
    {
      "name": "tokenForceCloseBorrowsWithTokenLog",
      "discriminator": [
        137,
        61,
        111,
        158,
        161,
        221,
        72,
        33
      ]
    },
    {
      "name": "tokenForceCloseBorrowsWithTokenLogV2",
      "discriminator": [
        52,
        79,
        171,
        50,
        186,
        248,
        176,
        109
      ]
    },
    {
      "name": "tokenConditionalSwapCreateLog",
      "discriminator": [
        57,
        148,
        245,
        56,
        66,
        121,
        23,
        177
      ]
    },
    {
      "name": "tokenConditionalSwapCreateLogV2",
      "discriminator": [
        220,
        208,
        88,
        56,
        65,
        62,
        122,
        165
      ]
    },
    {
      "name": "tokenConditionalSwapCreateLogV3",
      "discriminator": [
        18,
        125,
        59,
        171,
        5,
        79,
        217,
        9
      ]
    },
    {
      "name": "tokenConditionalSwapTriggerLog",
      "discriminator": [
        177,
        228,
        224,
        211,
        162,
        154,
        186,
        174
      ]
    },
    {
      "name": "tokenConditionalSwapTriggerLogV2",
      "discriminator": [
        102,
        94,
        233,
        115,
        118,
        37,
        86,
        69
      ]
    },
    {
      "name": "tokenConditionalSwapTriggerLogV3",
      "discriminator": [
        141,
        72,
        171,
        91,
        102,
        23,
        12,
        190
      ]
    },
    {
      "name": "tokenConditionalSwapCancelLog",
      "discriminator": [
        180,
        139,
        235,
        238,
        201,
        106,
        131,
        89
      ]
    },
    {
      "name": "tokenConditionalSwapStartLog",
      "discriminator": [
        61,
        167,
        61,
        226,
        53,
        0,
        132,
        35
      ]
    },
    {
      "name": "tokenCollateralFeeLog",
      "discriminator": [
        16,
        47,
        74,
        96,
        189,
        151,
        72,
        120
      ]
    },
    {
      "name": "forceWithdrawLog",
      "discriminator": [
        53,
        130,
        50,
        23,
        1,
        18,
        11,
        194
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "someError",
      "msg": ""
    },
    {
      "code": 6001,
      "name": "notImplementedError",
      "msg": ""
    },
    {
      "code": 6002,
      "name": "mathError",
      "msg": "checked math error"
    },
    {
      "code": 6003,
      "name": "unexpectedOracle",
      "msg": ""
    },
    {
      "code": 6004,
      "name": "unknownOracleType",
      "msg": "oracle type cannot be determined"
    },
    {
      "code": 6005,
      "name": "invalidFlashLoanTargetCpiProgram",
      "msg": ""
    },
    {
      "code": 6006,
      "name": "healthMustBePositive",
      "msg": "health must be positive"
    },
    {
      "code": 6007,
      "name": "healthMustBePositiveOrIncrease",
      "msg": "health must be positive or not decrease"
    },
    {
      "code": 6008,
      "name": "healthMustBeNegative",
      "msg": "health must be negative"
    },
    {
      "code": 6009,
      "name": "isBankrupt",
      "msg": "the account is bankrupt"
    },
    {
      "code": 6010,
      "name": "isNotBankrupt",
      "msg": "the account is not bankrupt"
    },
    {
      "code": 6011,
      "name": "noFreeTokenPositionIndex",
      "msg": "no free token position index"
    },
    {
      "code": 6012,
      "name": "noFreeSerum3OpenOrdersIndex",
      "msg": "no free serum3 open orders index"
    },
    {
      "code": 6013,
      "name": "noFreePerpPositionIndex",
      "msg": "no free perp position index"
    },
    {
      "code": 6014,
      "name": "serum3OpenOrdersExistAlready",
      "msg": "serum3 open orders exist already"
    },
    {
      "code": 6015,
      "name": "insufficentBankVaultFunds",
      "msg": "bank vault has insufficent funds"
    },
    {
      "code": 6016,
      "name": "beingLiquidated",
      "msg": "account is currently being liquidated"
    },
    {
      "code": 6017,
      "name": "invalidBank",
      "msg": "invalid bank"
    },
    {
      "code": 6018,
      "name": "profitabilityMismatch",
      "msg": "account profitability is mismatched"
    },
    {
      "code": 6019,
      "name": "cannotSettleWithSelf",
      "msg": "cannot settle with self"
    },
    {
      "code": 6020,
      "name": "perpPositionDoesNotExist",
      "msg": "perp position does not exist"
    },
    {
      "code": 6021,
      "name": "maxSettleAmountMustBeGreaterThanZero",
      "msg": "max settle amount must be greater than zero"
    },
    {
      "code": 6022,
      "name": "hasOpenPerpOrders",
      "msg": "the perp position has open orders or unprocessed fill events"
    },
    {
      "code": 6023,
      "name": "oracleConfidence",
      "msg": "an oracle does not reach the confidence threshold"
    },
    {
      "code": 6024,
      "name": "oracleStale",
      "msg": "an oracle is stale"
    },
    {
      "code": 6025,
      "name": "settlementAmountMustBePositive",
      "msg": "settlement amount must always be positive"
    },
    {
      "code": 6026,
      "name": "bankBorrowLimitReached",
      "msg": "bank utilization has reached limit"
    },
    {
      "code": 6027,
      "name": "bankNetBorrowsLimitReached",
      "msg": "bank net borrows has reached limit - this is an intermittent error - the limit will reset regularly"
    },
    {
      "code": 6028,
      "name": "tokenPositionDoesNotExist",
      "msg": "token position does not exist"
    },
    {
      "code": 6029,
      "name": "depositsIntoLiquidatingMustRecover",
      "msg": "token deposits into accounts that are being liquidated must bring their health above the init threshold"
    },
    {
      "code": 6030,
      "name": "tokenInReduceOnlyMode",
      "msg": "token is in reduce only mode"
    },
    {
      "code": 6031,
      "name": "marketInReduceOnlyMode",
      "msg": "market is in reduce only mode"
    },
    {
      "code": 6032,
      "name": "groupIsHalted",
      "msg": "group is halted"
    },
    {
      "code": 6033,
      "name": "perpHasBaseLots",
      "msg": "the perp position has non-zero base lots"
    },
    {
      "code": 6034,
      "name": "hasOpenOrUnsettledSerum3Orders",
      "msg": "there are open or unsettled serum3 orders"
    },
    {
      "code": 6035,
      "name": "hasLiquidatableTokenPosition",
      "msg": "has liquidatable token position"
    },
    {
      "code": 6036,
      "name": "hasLiquidatablePerpBasePosition",
      "msg": "has liquidatable perp base position"
    },
    {
      "code": 6037,
      "name": "hasLiquidatablePositivePerpPnl",
      "msg": "has liquidatable positive perp pnl"
    },
    {
      "code": 6038,
      "name": "accountIsFrozen",
      "msg": "account is frozen"
    },
    {
      "code": 6039,
      "name": "initAssetWeightCantBeNegative",
      "msg": "Init Asset Weight can't be negative"
    },
    {
      "code": 6040,
      "name": "hasOpenPerpTakerFills",
      "msg": "has open perp taker fills"
    },
    {
      "code": 6041,
      "name": "depositLimit",
      "msg": "deposit crosses the current group deposit limit"
    },
    {
      "code": 6042,
      "name": "ixIsDisabled",
      "msg": "instruction is disabled"
    },
    {
      "code": 6043,
      "name": "noLiquidatablePerpBasePosition",
      "msg": "no liquidatable perp base position"
    },
    {
      "code": 6044,
      "name": "perpOrderIdNotFound",
      "msg": "perp order id not found on the orderbook"
    },
    {
      "code": 6045,
      "name": "healthRegionBadInnerInstruction",
      "msg": "HealthRegions allow only specific instructions between Begin and End"
    },
    {
      "code": 6046,
      "name": "tokenInForceClose",
      "msg": "token is in force close"
    },
    {
      "code": 6047,
      "name": "invalidHealthAccountCount",
      "msg": "incorrect number of health accounts"
    },
    {
      "code": 6048,
      "name": "wouldSelfTrade",
      "msg": "would self trade"
    },
    {
      "code": 6049,
      "name": "tokenConditionalSwapPriceNotInRange",
      "msg": "token conditional swap oracle price is not in execution range"
    },
    {
      "code": 6050,
      "name": "tokenConditionalSwapExpired",
      "msg": "token conditional swap is expired"
    },
    {
      "code": 6051,
      "name": "tokenConditionalSwapNotStarted",
      "msg": "token conditional swap is not available yet"
    },
    {
      "code": 6052,
      "name": "tokenConditionalSwapAlreadyStarted",
      "msg": "token conditional swap was already started"
    },
    {
      "code": 6053,
      "name": "tokenConditionalSwapNotSet",
      "msg": "token conditional swap it not set"
    },
    {
      "code": 6054,
      "name": "tokenConditionalSwapMinBuyTokenNotReached",
      "msg": "token conditional swap trigger did not reach min_buy_token"
    },
    {
      "code": 6055,
      "name": "tokenConditionalSwapCantPayIncentive",
      "msg": "token conditional swap cannot pay incentive"
    },
    {
      "code": 6056,
      "name": "tokenConditionalSwapTakerPriceTooLow",
      "msg": "token conditional swap taker price is too low"
    },
    {
      "code": 6057,
      "name": "tokenConditionalSwapIndexIdMismatch",
      "msg": "token conditional swap index and id don't match"
    },
    {
      "code": 6058,
      "name": "tokenConditionalSwapTooSmallForStartIncentive",
      "msg": "token conditional swap volume is too small compared to the cost of starting it"
    },
    {
      "code": 6059,
      "name": "tokenConditionalSwapTypeNotStartable",
      "msg": "token conditional swap type cannot be started"
    },
    {
      "code": 6060,
      "name": "healthAccountBankNotWritable",
      "msg": "a bank in the health account list should be writable but is not"
    },
    {
      "code": 6061,
      "name": "serum3PriceBandExceeded",
      "msg": "the market does not allow limit orders too far from the current oracle value"
    },
    {
      "code": 6062,
      "name": "bankDepositLimit",
      "msg": "deposit crosses the token's deposit limit"
    },
    {
      "code": 6063,
      "name": "delegateWithdrawOnlyToOwnerAta",
      "msg": "delegates can only withdraw to the owner's associated token account"
    },
    {
      "code": 6064,
      "name": "delegateWithdrawMustClosePosition",
      "msg": "delegates can only withdraw if they close the token position"
    },
    {
      "code": 6065,
      "name": "delegateWithdrawSmall",
      "msg": "delegates can only withdraw small amounts"
    },
    {
      "code": 6066,
      "name": "invalidClmmOracle",
      "msg": "The provided CLMM oracle is not valid"
    },
    {
      "code": 6067,
      "name": "invalidFeedForClmmOracle",
      "msg": "invalid usdc/usd feed provided for the CLMM oracle"
    },
    {
      "code": 6068,
      "name": "missingFeedForClmmOracle",
      "msg": "Pyth USDC/USD or SOL/USD feed not found (required by CLMM oracle)"
    },
    {
      "code": 6069,
      "name": "tokenAssetLiquidationDisabled",
      "msg": "the asset does not allow liquidation"
    },
    {
      "code": 6070,
      "name": "borrowsRequireHealthAccountBank",
      "msg": "for borrows the bank must be in the health account list"
    },
    {
      "code": 6071,
      "name": "invalidSequenceNumber",
      "msg": "invalid sequence number"
    },
    {
      "code": 6072,
      "name": "invalidHealth",
      "msg": "invalid health"
    }
  ],
  "types": [
    {
      "name": "interestRateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "util0",
            "type": "f32"
          },
          {
            "name": "rate0",
            "type": "f32"
          },
          {
            "name": "util1",
            "type": "f32"
          },
          {
            "name": "rate1",
            "type": "f32"
          },
          {
            "name": "maxRate",
            "type": "f32"
          },
          {
            "name": "adjustmentFactor",
            "type": "f32"
          }
        ]
      }
    },
    {
      "name": "equity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokens",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenEquity"
                }
              }
            }
          },
          {
            "name": "perps",
            "type": {
              "vec": {
                "defined": {
                  "name": "perpEquity"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "tokenEquity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "value",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          }
        ]
      }
    },
    {
      "name": "perpEquity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "value",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          }
        ]
      }
    },
    {
      "name": "flashLoanTokenDetail",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "changeAmount",
            "type": "i128"
          },
          {
            "name": "loan",
            "type": "i128"
          },
          {
            "name": "loanOriginationFee",
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "flashLoanTokenDetailV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "changeAmount",
            "type": "i128"
          },
          {
            "name": "loan",
            "type": "i128"
          },
          {
            "name": "loanOriginationFee",
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "depositFee",
            "type": "i128"
          },
          {
            "name": "approvedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "flashLoanTokenDetailV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "changeAmount",
            "type": "i128"
          },
          {
            "name": "loan",
            "type": "i128"
          },
          {
            "name": "loanOriginationFee",
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "swapFee",
            "type": "i128"
          },
          {
            "name": "approvedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indexedPosition",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "inUseCount",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "previousIndex",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "cumulativeDepositInterest",
            "type": "f64"
          },
          {
            "name": "cumulativeBorrowInterest",
            "type": "f64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "serum3Orders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openOrders",
            "type": "pubkey"
          },
          {
            "name": "baseBorrowsWithoutFee",
            "type": "u64"
          },
          {
            "name": "quoteBorrowsWithoutFee",
            "type": "u64"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "highestPlacedBidInv",
            "type": "f64"
          },
          {
            "name": "lowestPlacedAsk",
            "type": "f64"
          },
          {
            "name": "potentialBaseTokens",
            "type": "u64"
          },
          {
            "name": "potentialQuoteTokens",
            "type": "u64"
          },
          {
            "name": "lowestPlacedBidInv",
            "type": "f64"
          },
          {
            "name": "highestPlacedAsk",
            "type": "f64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "perpPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "settlePnlLimitWindow",
            "type": "u32"
          },
          {
            "name": "settlePnlLimitSettledInCurrentWindowNative",
            "type": "i64"
          },
          {
            "name": "basePositionLots",
            "type": "i64"
          },
          {
            "name": "quotePositionNative",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "quoteRunningNative",
            "type": "i64"
          },
          {
            "name": "longSettledFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "shortSettledFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "bidsBaseLots",
            "type": "i64"
          },
          {
            "name": "asksBaseLots",
            "type": "i64"
          },
          {
            "name": "takerBaseLots",
            "type": "i64"
          },
          {
            "name": "takerQuoteLots",
            "type": "i64"
          },
          {
            "name": "cumulativeLongFunding",
            "type": "f64"
          },
          {
            "name": "cumulativeShortFunding",
            "type": "f64"
          },
          {
            "name": "makerVolume",
            "type": "u64"
          },
          {
            "name": "takerVolume",
            "type": "u64"
          },
          {
            "name": "perpSpotTransfers",
            "type": "i64"
          },
          {
            "name": "avgEntryPricePerBaseLot",
            "type": "f64"
          },
          {
            "name": "deprecatedRealizedTradePnlNative",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "oneshotSettlePnlAllowance",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "recurringSettlePnlAllowance",
            "type": "i64"
          },
          {
            "name": "realizedPnlForPositionNative",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                88
              ]
            }
          }
        ]
      }
    },
    {
      "name": "perpOpenOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sideAndTree",
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "market",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "clientId",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "u128"
          },
          {
            "name": "quantity",
            "type": "i64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                56
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mangoAccountFixed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "accountNum",
            "type": "u32"
          },
          {
            "name": "beingLiquidated",
            "type": "u8"
          },
          {
            "name": "inHealthRegion",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "sequenceNumber",
            "type": "u8"
          },
          {
            "name": "netDeposits",
            "type": "i64"
          },
          {
            "name": "perpSpotTransfers",
            "type": "i64"
          },
          {
            "name": "healthRegionBeginInitHealth",
            "type": "i64"
          },
          {
            "name": "frozenUntil",
            "type": "u64"
          },
          {
            "name": "buybackFeesAccruedCurrent",
            "type": "u64"
          },
          {
            "name": "buybackFeesAccruedPrevious",
            "type": "u64"
          },
          {
            "name": "buybackFeesExpiryTimestamp",
            "type": "u64"
          },
          {
            "name": "nextTokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "temporaryDelegate",
            "type": "pubkey"
          },
          {
            "name": "temporaryDelegateExpiry",
            "type": "u64"
          },
          {
            "name": "lastCollateralFeeCharge",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                152
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracleConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "confFilter",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maxStalenessSlots",
            "type": "i64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                72
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracleConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "confFilter",
            "type": "f32"
          },
          {
            "name": "maxStalenessSlots",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "innerNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          },
          {
            "name": "prefixLen",
            "type": "u32"
          },
          {
            "name": "key",
            "type": "u128"
          },
          {
            "name": "children",
            "type": {
              "array": [
                "u32",
                2
              ]
            }
          },
          {
            "name": "childEarliestExpiry",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                72
              ]
            }
          }
        ]
      }
    },
    {
      "name": "leafNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "ownerSlot",
            "type": "u8"
          },
          {
            "name": "orderType",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "timeInForce",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "key",
            "type": "u128"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "quantity",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "pegLimit",
            "type": "i64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "anyNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tag",
            "type": "u8"
          },
          {
            "name": "data",
            "type": {
              "array": [
                "u8",
                111
              ]
            }
          },
          {
            "name": "forceAlign",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "orderTreeRoot",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maybeNode",
            "type": "u32"
          },
          {
            "name": "leafCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "orderTreeNodes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderTreeType",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          },
          {
            "name": "bumpIndex",
            "type": "u32"
          },
          {
            "name": "freeListLen",
            "type": "u32"
          },
          {
            "name": "freeListHead",
            "type": "u32"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                512
              ]
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "anyNode"
                  }
                },
                1024
              ]
            }
          }
        ]
      }
    },
    {
      "name": "eventQueueHeader",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "head",
            "type": "u32"
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "seqNum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "anyEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventType",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                207
              ]
            }
          }
        ]
      }
    },
    {
      "name": "fillEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventType",
            "type": "u8"
          },
          {
            "name": "takerSide",
            "type": "u8"
          },
          {
            "name": "makerOut",
            "type": "u8"
          },
          {
            "name": "makerSlot",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "maker",
            "type": "pubkey"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "makerTimestamp",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "pubkey"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "takerClientOrderId",
            "type": "u64"
          },
          {
            "name": "makerOrderId",
            "type": "u128"
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "quantity",
            "type": "i64"
          },
          {
            "name": "makerClientOrderId",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "f32"
          },
          {
            "name": "takerFee",
            "type": "f32"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "outEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventType",
            "type": "u8"
          },
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "ownerSlot",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "quantity",
            "type": "i64"
          },
          {
            "name": "orderId",
            "type": "u128"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "stablePriceModel",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stablePrice",
            "type": "f64"
          },
          {
            "name": "lastUpdateTimestamp",
            "type": "u64"
          },
          {
            "name": "delayPrices",
            "type": {
              "array": [
                "f64",
                24
              ]
            }
          },
          {
            "name": "delayAccumulatorPrice",
            "type": "f64"
          },
          {
            "name": "delayAccumulatorTime",
            "type": "u32"
          },
          {
            "name": "delayIntervalSeconds",
            "type": "u32"
          },
          {
            "name": "delayGrowthLimit",
            "type": "f32"
          },
          {
            "name": "stableGrowthLimit",
            "type": "f32"
          },
          {
            "name": "lastDelayIntervalIndex",
            "type": "u8"
          },
          {
            "name": "resetOnNonzeroPrice",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                48
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "maxBuy",
            "type": "u64"
          },
          {
            "name": "maxSell",
            "type": "u64"
          },
          {
            "name": "bought",
            "type": "u64"
          },
          {
            "name": "sold",
            "type": "u64"
          },
          {
            "name": "expiryTimestamp",
            "type": "u64"
          },
          {
            "name": "priceLowerLimit",
            "type": "f64"
          },
          {
            "name": "priceUpperLimit",
            "type": "f64"
          },
          {
            "name": "pricePremiumRate",
            "type": "f64"
          },
          {
            "name": "takerFeeRate",
            "type": "f32"
          },
          {
            "name": "makerFeeRate",
            "type": "f32"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "isConfigured",
            "type": "u8"
          },
          {
            "name": "allowCreatingDeposits",
            "type": "u8"
          },
          {
            "name": "allowCreatingBorrows",
            "type": "u8"
          },
          {
            "name": "displayPriceStyle",
            "type": "u8"
          },
          {
            "name": "intention",
            "type": "u8"
          },
          {
            "name": "tcsType",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "durationSeconds",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                88
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tokenIndex",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "serum3MarketIndex",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "perpMarketIndex",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "i80f48",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "flashLoanType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "unknown"
          },
          {
            "name": "swap"
          },
          {
            "name": "swapWithoutFee"
          }
        ]
      }
    },
    {
      "name": "healthCheckKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "maint"
          },
          {
            "name": "init"
          },
          {
            "name": "liquidationEnd"
          },
          {
            "name": "maintRatio"
          },
          {
            "name": "initRatio"
          },
          {
            "name": "liquidationEndRatio"
          }
        ]
      }
    },
    {
      "name": "serum3SelfTradeBehavior",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "decrementTake"
          },
          {
            "name": "cancelProvide"
          },
          {
            "name": "abortTransaction"
          }
        ]
      }
    },
    {
      "name": "serum3OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "limit"
          },
          {
            "name": "immediateOrCancel"
          },
          {
            "name": "postOnly"
          }
        ]
      }
    },
    {
      "name": "serum3Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "bid"
          },
          {
            "name": "ask"
          }
        ]
      }
    },
    {
      "name": "healthType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "init"
          },
          {
            "name": "maint"
          },
          {
            "name": "liquidationEnd"
          }
        ]
      }
    },
    {
      "name": "loanOriginationFeeInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "unknown"
          },
          {
            "name": "liqTokenBankruptcy"
          },
          {
            "name": "liqTokenWithToken"
          },
          {
            "name": "serum3LiqForceCancelOrders"
          },
          {
            "name": "serum3PlaceOrder"
          },
          {
            "name": "serum3SettleFunds"
          },
          {
            "name": "tokenWithdraw"
          },
          {
            "name": "tokenConditionalSwapTrigger"
          }
        ]
      }
    },
    {
      "name": "ixGate",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "accountClose"
          },
          {
            "name": "accountCreate"
          },
          {
            "name": "accountEdit"
          },
          {
            "name": "accountExpand"
          },
          {
            "name": "accountToggleFreeze"
          },
          {
            "name": "altExtend"
          },
          {
            "name": "altSet"
          },
          {
            "name": "flashLoan"
          },
          {
            "name": "groupClose"
          },
          {
            "name": "groupCreate"
          },
          {
            "name": "healthRegion"
          },
          {
            "name": "perpCancelAllOrders"
          },
          {
            "name": "perpCancelAllOrdersBySide"
          },
          {
            "name": "perpCancelOrder"
          },
          {
            "name": "perpCancelOrderByClientOrderId"
          },
          {
            "name": "perpCloseMarket"
          },
          {
            "name": "perpConsumeEvents"
          },
          {
            "name": "perpCreateMarket"
          },
          {
            "name": "perpDeactivatePosition"
          },
          {
            "name": "perpLiqBaseOrPositivePnl"
          },
          {
            "name": "perpLiqForceCancelOrders"
          },
          {
            "name": "perpLiqNegativePnlOrBankruptcy"
          },
          {
            "name": "perpPlaceOrder"
          },
          {
            "name": "perpSettleFees"
          },
          {
            "name": "perpSettlePnl"
          },
          {
            "name": "perpUpdateFunding"
          },
          {
            "name": "serum3CancelAllOrders"
          },
          {
            "name": "serum3CancelOrder"
          },
          {
            "name": "serum3CloseOpenOrders"
          },
          {
            "name": "serum3CreateOpenOrders"
          },
          {
            "name": "serum3DeregisterMarket"
          },
          {
            "name": "serum3EditMarket"
          },
          {
            "name": "serum3LiqForceCancelOrders"
          },
          {
            "name": "serum3PlaceOrder"
          },
          {
            "name": "serum3RegisterMarket"
          },
          {
            "name": "serum3SettleFunds"
          },
          {
            "name": "stubOracleClose"
          },
          {
            "name": "stubOracleCreate"
          },
          {
            "name": "stubOracleSet"
          },
          {
            "name": "tokenAddBank"
          },
          {
            "name": "tokenDeposit"
          },
          {
            "name": "tokenDeregister"
          },
          {
            "name": "tokenLiqBankruptcy"
          },
          {
            "name": "tokenLiqWithToken"
          },
          {
            "name": "tokenRegister"
          },
          {
            "name": "tokenRegisterTrustless"
          },
          {
            "name": "tokenUpdateIndexAndRate"
          },
          {
            "name": "tokenWithdraw"
          },
          {
            "name": "accountBuybackFeesWithMngo"
          },
          {
            "name": "tokenForceCloseBorrowsWithToken"
          },
          {
            "name": "perpForceClosePosition"
          },
          {
            "name": "groupWithdrawInsuranceFund"
          },
          {
            "name": "tokenConditionalSwapCreate"
          },
          {
            "name": "tokenConditionalSwapTrigger"
          },
          {
            "name": "tokenConditionalSwapCancel"
          },
          {
            "name": "openbookV2CancelOrder"
          },
          {
            "name": "openbookV2CloseOpenOrders"
          },
          {
            "name": "openbookV2CreateOpenOrders"
          },
          {
            "name": "openbookV2DeregisterMarket"
          },
          {
            "name": "openbookV2EditMarket"
          },
          {
            "name": "openbookV2LiqForceCancelOrders"
          },
          {
            "name": "openbookV2PlaceOrder"
          },
          {
            "name": "openbookV2PlaceTakeOrder"
          },
          {
            "name": "openbookV2RegisterMarket"
          },
          {
            "name": "openbookV2SettleFunds"
          },
          {
            "name": "adminTokenWithdrawFees"
          },
          {
            "name": "adminPerpWithdrawFees"
          },
          {
            "name": "accountSizeMigration"
          },
          {
            "name": "tokenConditionalSwapStart"
          },
          {
            "name": "tokenConditionalSwapCreatePremiumAuction"
          },
          {
            "name": "tokenConditionalSwapCreateLinearAuction"
          },
          {
            "name": "serum3PlaceOrderV2"
          },
          {
            "name": "tokenForceWithdraw"
          },
          {
            "name": "sequenceCheck"
          },
          {
            "name": "healthCheck"
          },
          {
            "name": "groupChangeInsuranceFund"
          }
        ]
      }
    },
    {
      "name": "checkLiquidatable",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "notLiquidatable"
          },
          {
            "name": "liquidatable"
          },
          {
            "name": "becameNotLiquidatable"
          }
        ]
      }
    },
    {
      "name": "oracleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pyth"
          },
          {
            "name": "stub"
          },
          {
            "name": "switchboardV1"
          },
          {
            "name": "switchboardV2"
          },
          {
            "name": "orcaClmm"
          },
          {
            "name": "raydiumClmm"
          },
          {
            "name": "switchboardOnDemand"
          },
          {
            "name": "pythV2"
          }
        ]
      }
    },
    {
      "name": "orderState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "valid"
          },
          {
            "name": "invalid"
          },
          {
            "name": "skipped"
          }
        ]
      }
    },
    {
      "name": "bookSideOrderTree",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fixed"
          },
          {
            "name": "oraclePegged"
          }
        ]
      }
    },
    {
      "name": "nodeTag",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "uninitialized"
          },
          {
            "name": "innerNode"
          },
          {
            "name": "leafNode"
          },
          {
            "name": "freeNode"
          },
          {
            "name": "lastFreeNode"
          }
        ]
      }
    },
    {
      "name": "placeOrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "limit"
          },
          {
            "name": "immediateOrCancel"
          },
          {
            "name": "postOnly"
          },
          {
            "name": "market"
          },
          {
            "name": "postOnlySlide"
          }
        ]
      }
    },
    {
      "name": "postOrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "limit"
          },
          {
            "name": "postOnly"
          },
          {
            "name": "postOnlySlide"
          }
        ]
      }
    },
    {
      "name": "selfTradeBehavior",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "decrementTake"
          },
          {
            "name": "cancelProvide"
          },
          {
            "name": "abortTransaction"
          }
        ]
      }
    },
    {
      "name": "side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "bid"
          },
          {
            "name": "ask"
          }
        ]
      }
    },
    {
      "name": "sideAndOrderTree",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "bidFixed"
          },
          {
            "name": "askFixed"
          },
          {
            "name": "bidOraclePegged"
          },
          {
            "name": "askOraclePegged"
          }
        ]
      }
    },
    {
      "name": "orderParams",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "market"
          },
          {
            "name": "immediateOrCancel",
            "fields": [
              {
                "name": "priceLots",
                "type": "i64"
              }
            ]
          },
          {
            "name": "fixed",
            "fields": [
              {
                "name": "priceLots",
                "type": "i64"
              },
              {
                "name": "orderType",
                "type": {
                  "defined": {
                    "name": "postOrderType"
                  }
                }
              }
            ]
          },
          {
            "name": "oraclePegged",
            "fields": [
              {
                "name": "priceOffsetLots",
                "type": "i64"
              },
              {
                "name": "orderType",
                "type": {
                  "defined": {
                    "name": "postOrderType"
                  }
                }
              },
              {
                "name": "pegLimit",
                "type": "i64"
              },
              {
                "name": "maxOracleStalenessSlots",
                "type": "i32"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "orderTreeType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "bids"
          },
          {
            "name": "asks"
          }
        ]
      }
    },
    {
      "name": "eventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fill"
          },
          {
            "name": "out"
          },
          {
            "name": "liquidate"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapDisplayPriceStyle",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "sellTokenPerBuyToken"
          },
          {
            "name": "buyTokenPerSellToken"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapIntention",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "unknown"
          },
          {
            "name": "stopLoss"
          },
          {
            "name": "takeProfit"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fixedPremium"
          },
          {
            "name": "premiumAuction"
          },
          {
            "name": "linearAuction"
          }
        ]
      }
    },
    {
      "name": "bank",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "oracleConfig",
            "type": {
              "defined": {
                "name": "oracleConfig"
              }
            }
          },
          {
            "name": "stablePriceModel",
            "type": {
              "defined": {
                "name": "stablePriceModel"
              }
            }
          },
          {
            "name": "depositIndex",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "borrowIndex",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "indexedDeposits",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "indexedBorrows",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "indexLastUpdated",
            "type": "u64"
          },
          {
            "name": "bankRateLastUpdated",
            "type": "u64"
          },
          {
            "name": "avgUtilization",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "adjustmentFactor",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "util0",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "rate0",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "util1",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "rate1",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maxRate",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "collectedFeesNative",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "loanOriginationFeeRate",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "loanFeeRate",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "initAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintLiabWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "initLiabWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "liquidationFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "dust",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "flashLoanTokenAccountInitial",
            "type": "u64"
          },
          {
            "name": "flashLoanApprovedAmount",
            "type": "u64"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "mintDecimals",
            "type": "u8"
          },
          {
            "name": "bankNum",
            "type": "u32"
          },
          {
            "name": "minVaultToDepositsRatio",
            "type": "f64"
          },
          {
            "name": "netBorrowLimitWindowSizeTs",
            "type": "u64"
          },
          {
            "name": "lastNetBorrowsWindowStartTs",
            "type": "u64"
          },
          {
            "name": "netBorrowLimitPerWindowQuote",
            "type": "i64"
          },
          {
            "name": "netBorrowsInWindow",
            "type": "i64"
          },
          {
            "name": "borrowWeightScaleStartQuote",
            "type": "f64"
          },
          {
            "name": "depositWeightScaleStartQuote",
            "type": "f64"
          },
          {
            "name": "reduceOnly",
            "type": "u8"
          },
          {
            "name": "forceClose",
            "type": "u8"
          },
          {
            "name": "disableAssetLiquidation",
            "type": "u8"
          },
          {
            "name": "forceWithdraw",
            "type": "u8"
          },
          {
            "name": "tier",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "feesWithdrawn",
            "type": "u64"
          },
          {
            "name": "tokenConditionalSwapTakerFeeRate",
            "type": "f32"
          },
          {
            "name": "tokenConditionalSwapMakerFeeRate",
            "type": "f32"
          },
          {
            "name": "flashLoanSwapFeeRate",
            "type": "f32"
          },
          {
            "name": "interestTargetUtilization",
            "type": "f32"
          },
          {
            "name": "interestCurveScaling",
            "type": "f64"
          },
          {
            "name": "potentialSerumTokens",
            "type": "u64"
          },
          {
            "name": "maintWeightShiftStart",
            "type": "u64"
          },
          {
            "name": "maintWeightShiftEnd",
            "type": "u64"
          },
          {
            "name": "maintWeightShiftDurationInv",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintWeightShiftAssetTarget",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintWeightShiftLiabTarget",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "fallbackOracle",
            "type": "pubkey"
          },
          {
            "name": "depositLimit",
            "type": "u64"
          },
          {
            "name": "zeroUtilRate",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "platformLiquidationFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "collectedLiquidationFees",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "collectedCollateralFees",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "collateralFeePerDay",
            "type": "f32"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                1900
              ]
            }
          }
        ]
      }
    },
    {
      "name": "group",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "groupNum",
            "type": "u32"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "fastListingAdmin",
            "type": "pubkey"
          },
          {
            "name": "mngoTokenIndex",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "insuranceVault",
            "type": "pubkey"
          },
          {
            "name": "insuranceMint",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "testing",
            "type": "u8"
          },
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "buybackFees",
            "type": "u8"
          },
          {
            "name": "buybackFeesMngoBonusFactor",
            "type": "f32"
          },
          {
            "name": "addressLookupTables",
            "type": {
              "array": [
                "pubkey",
                20
              ]
            }
          },
          {
            "name": "securityAdmin",
            "type": "pubkey"
          },
          {
            "name": "depositLimitQuote",
            "type": "u64"
          },
          {
            "name": "ixGate",
            "type": "u128"
          },
          {
            "name": "buybackFeesSwapMangoAccount",
            "type": "pubkey"
          },
          {
            "name": "buybackFeesExpiryInterval",
            "type": "u64"
          },
          {
            "name": "fastListingIntervalStart",
            "type": "u64"
          },
          {
            "name": "fastListingsInInterval",
            "type": "u16"
          },
          {
            "name": "allowedFastListingsPerInterval",
            "type": "u16"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "collateralFeeInterval",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                1800
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mangoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "accountNum",
            "type": "u32"
          },
          {
            "name": "beingLiquidated",
            "type": "u8"
          },
          {
            "name": "inHealthRegion",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "sequenceNumber",
            "type": "u8"
          },
          {
            "name": "netDeposits",
            "type": "i64"
          },
          {
            "name": "perpSpotTransfers",
            "type": "i64"
          },
          {
            "name": "healthRegionBeginInitHealth",
            "type": "i64"
          },
          {
            "name": "frozenUntil",
            "type": "u64"
          },
          {
            "name": "buybackFeesAccruedCurrent",
            "type": "u64"
          },
          {
            "name": "buybackFeesAccruedPrevious",
            "type": "u64"
          },
          {
            "name": "buybackFeesExpiryTimestamp",
            "type": "u64"
          },
          {
            "name": "nextTokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "temporaryDelegate",
            "type": "pubkey"
          },
          {
            "name": "temporaryDelegateExpiry",
            "type": "u64"
          },
          {
            "name": "lastCollateralFeeCharge",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                152
              ]
            }
          },
          {
            "name": "headerVersion",
            "type": "u8"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "padding4",
            "type": "u32"
          },
          {
            "name": "tokens",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenPosition"
                }
              }
            }
          },
          {
            "name": "padding5",
            "type": "u32"
          },
          {
            "name": "serum3",
            "type": {
              "vec": {
                "defined": {
                  "name": "serum3Orders"
                }
              }
            }
          },
          {
            "name": "padding6",
            "type": "u32"
          },
          {
            "name": "perps",
            "type": {
              "vec": {
                "defined": {
                  "name": "perpPosition"
                }
              }
            }
          },
          {
            "name": "padding7",
            "type": "u32"
          },
          {
            "name": "perpOpenOrders",
            "type": {
              "vec": {
                "defined": {
                  "name": "perpOpenOrder"
                }
              }
            }
          },
          {
            "name": "padding8",
            "type": "u32"
          },
          {
            "name": "tokenConditionalSwaps",
            "type": {
              "vec": {
                "defined": {
                  "name": "tokenConditionalSwap"
                }
              }
            }
          },
          {
            "name": "reservedDynamic",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mintInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "groupInsuranceFund",
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "banks",
            "type": {
              "array": [
                "pubkey",
                6
              ]
            }
          },
          {
            "name": "vaults",
            "type": {
              "array": [
                "pubkey",
                6
              ]
            }
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "registrationTime",
            "type": "u64"
          },
          {
            "name": "fallbackOracle",
            "type": "pubkey"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                2528
              ]
            }
          }
        ]
      }
    },
    {
      "name": "openbookV2Market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "reduceOnly",
            "type": "u8"
          },
          {
            "name": "forceClose",
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "openbookV2Program",
            "type": "pubkey"
          },
          {
            "name": "openbookV2MarketExternal",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "registrationTime",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                512
              ]
            }
          }
        ]
      }
    },
    {
      "name": "openbookV2MarketIndexReservation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                38
              ]
            }
          }
        ]
      }
    },
    {
      "name": "stubOracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "price",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "lastUpdateTs",
            "type": "i64"
          },
          {
            "name": "lastUpdateSlot",
            "type": "u64"
          },
          {
            "name": "deviation",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                104
              ]
            }
          }
        ]
      }
    },
    {
      "name": "bookSide",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "roots",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "orderTreeRoot"
                  }
                },
                2
              ]
            }
          },
          {
            "name": "reservedRoots",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "orderTreeRoot"
                  }
                },
                4
              ]
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          },
          {
            "name": "nodes",
            "type": {
              "defined": {
                "name": "orderTreeNodes"
              }
            }
          }
        ]
      }
    },
    {
      "name": "eventQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "header",
            "type": {
              "defined": {
                "name": "eventQueueHeader"
              }
            }
          },
          {
            "name": "buf",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "anyEvent"
                  }
                },
                488
              ]
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "perpMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "settleTokenIndex",
            "type": "u16"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "blocked1",
            "type": "u8"
          },
          {
            "name": "groupInsuranceFund",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "baseDecimals",
            "type": "u8"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "bids",
            "type": "pubkey"
          },
          {
            "name": "asks",
            "type": "pubkey"
          },
          {
            "name": "eventQueue",
            "type": "pubkey"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "oracleConfig",
            "type": {
              "defined": {
                "name": "oracleConfig"
              }
            }
          },
          {
            "name": "stablePriceModel",
            "type": {
              "defined": {
                "name": "stablePriceModel"
              }
            }
          },
          {
            "name": "quoteLotSize",
            "type": "i64"
          },
          {
            "name": "baseLotSize",
            "type": "i64"
          },
          {
            "name": "maintBaseAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "initBaseAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintBaseLiabWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "initBaseLiabWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "openInterest",
            "type": "i64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "registrationTime",
            "type": "u64"
          },
          {
            "name": "minFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maxFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "impactQuantity",
            "type": "i64"
          },
          {
            "name": "longFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "shortFunding",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "fundingLastUpdated",
            "type": "u64"
          },
          {
            "name": "baseLiquidationFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "makerFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "takerFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "feesAccrued",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "feesSettled",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "feePenalty",
            "type": "f32"
          },
          {
            "name": "settleFeeFlat",
            "type": "f32"
          },
          {
            "name": "settleFeeAmountThreshold",
            "type": "f32"
          },
          {
            "name": "settleFeeFractionLowHealth",
            "type": "f32"
          },
          {
            "name": "settlePnlLimitFactor",
            "type": "f32"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "settlePnlLimitWindowSizeTs",
            "type": "u64"
          },
          {
            "name": "reduceOnly",
            "type": "u8"
          },
          {
            "name": "forceClose",
            "type": "u8"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "maintOverallAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "initOverallAssetWeight",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "positivePnlLiquidationFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "feesWithdrawn",
            "type": "u64"
          },
          {
            "name": "platformLiquidationFee",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "accruedLiquidationFees",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                1848
              ]
            }
          }
        ]
      }
    },
    {
      "name": "serum3Market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "reduceOnly",
            "type": "u8"
          },
          {
            "name": "forceClose",
            "type": "u8"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "serumProgram",
            "type": "pubkey"
          },
          {
            "name": "serumMarketExternal",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "oraclePriceBand",
            "type": "f32"
          },
          {
            "name": "registrationTime",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "serum3MarketIndexReservation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                38
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mangoAccountData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initHealth",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "maintHealth",
            "type": {
              "defined": {
                "name": "i80f48"
              }
            }
          },
          {
            "name": "equity",
            "type": {
              "defined": {
                "name": "equity"
              }
            }
          }
        ]
      }
    },
    {
      "name": "perpBalanceLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "basePosition",
            "type": "i64"
          },
          {
            "name": "quotePosition",
            "type": "i128"
          },
          {
            "name": "longSettledFunding",
            "type": "i128"
          },
          {
            "name": "shortSettledFunding",
            "type": "i128"
          },
          {
            "name": "longFunding",
            "type": "i128"
          },
          {
            "name": "shortFunding",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "tokenBalanceLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "indexedPosition",
            "type": "i128"
          },
          {
            "name": "depositIndex",
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "flashLoanLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenLoanDetails",
            "type": {
              "vec": {
                "defined": {
                  "name": "flashLoanTokenDetail"
                }
              }
            }
          },
          {
            "name": "flashLoanType",
            "type": {
              "defined": {
                "name": "flashLoanType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "flashLoanLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenLoanDetails",
            "type": {
              "vec": {
                "defined": {
                  "name": "flashLoanTokenDetailV2"
                }
              }
            }
          },
          {
            "name": "flashLoanType",
            "type": {
              "defined": {
                "name": "flashLoanType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "flashLoanLogV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenLoanDetails",
            "type": {
              "vec": {
                "defined": {
                  "name": "flashLoanTokenDetailV3"
                }
              }
            }
          },
          {
            "name": "flashLoanType",
            "type": {
              "defined": {
                "name": "flashLoanType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "withdrawLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "depositLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "fillLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "takerSide",
            "type": "u8"
          },
          {
            "name": "makerSlot",
            "type": "u8"
          },
          {
            "name": "makerOut",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "maker",
            "type": "pubkey"
          },
          {
            "name": "makerOrderId",
            "type": "u128"
          },
          {
            "name": "makerFee",
            "type": "i128"
          },
          {
            "name": "makerTimestamp",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "pubkey"
          },
          {
            "name": "takerOrderId",
            "type": "u128"
          },
          {
            "name": "takerClientOrderId",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "quantity",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "fillLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "takerSide",
            "type": "u8"
          },
          {
            "name": "makerSlot",
            "type": "u8"
          },
          {
            "name": "makerOut",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "maker",
            "type": "pubkey"
          },
          {
            "name": "makerClientOrderId",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "f32"
          },
          {
            "name": "makerTimestamp",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "pubkey"
          },
          {
            "name": "takerClientOrderId",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "f32"
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "quantity",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "fillLogV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "takerSide",
            "type": "u8"
          },
          {
            "name": "makerSlot",
            "type": "u8"
          },
          {
            "name": "makerOut",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "u64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "maker",
            "type": "pubkey"
          },
          {
            "name": "makerClientOrderId",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "f32"
          },
          {
            "name": "makerTimestamp",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "pubkey"
          },
          {
            "name": "takerClientOrderId",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "f32"
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "quantity",
            "type": "i64"
          },
          {
            "name": "makerClosedPnl",
            "type": "f64"
          },
          {
            "name": "takerClosedPnl",
            "type": "f64"
          }
        ]
      }
    },
    {
      "name": "perpUpdateFundingLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "longFunding",
            "type": "i128"
          },
          {
            "name": "shortFunding",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "oracleSlot",
            "type": "u64"
          },
          {
            "name": "stablePrice",
            "type": "i128"
          },
          {
            "name": "feesAccrued",
            "type": "i128"
          },
          {
            "name": "feesSettled",
            "type": "i128"
          },
          {
            "name": "openInterest",
            "type": "i64"
          },
          {
            "name": "instantaneousFundingRate",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpUpdateFundingLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "longFunding",
            "type": "i128"
          },
          {
            "name": "shortFunding",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "oracleSlot",
            "type": "u64"
          },
          {
            "name": "oracleConfidence",
            "type": "i128"
          },
          {
            "name": "oracleType",
            "type": {
              "defined": {
                "name": "oracleType"
              }
            }
          },
          {
            "name": "stablePrice",
            "type": "i128"
          },
          {
            "name": "feesAccrued",
            "type": "i128"
          },
          {
            "name": "feesSettled",
            "type": "i128"
          },
          {
            "name": "openInterest",
            "type": "i64"
          },
          {
            "name": "instantaneousFundingRate",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "updateIndexLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "depositIndex",
            "type": "i128"
          },
          {
            "name": "borrowIndex",
            "type": "i128"
          },
          {
            "name": "avgUtilization",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "stablePrice",
            "type": "i128"
          },
          {
            "name": "collectedFees",
            "type": "i128"
          },
          {
            "name": "loanFeeRate",
            "type": "i128"
          },
          {
            "name": "totalBorrows",
            "type": "i128"
          },
          {
            "name": "totalDeposits",
            "type": "i128"
          },
          {
            "name": "borrowRate",
            "type": "i128"
          },
          {
            "name": "depositRate",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "updateRateLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "rate0",
            "type": "i128"
          },
          {
            "name": "rate1",
            "type": "i128"
          },
          {
            "name": "maxRate",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "updateRateLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "rate0",
            "type": "i128"
          },
          {
            "name": "util0",
            "type": "i128"
          },
          {
            "name": "rate1",
            "type": "i128"
          },
          {
            "name": "util1",
            "type": "i128"
          },
          {
            "name": "maxRate",
            "type": "i128"
          },
          {
            "name": "curveScaling",
            "type": "f64"
          },
          {
            "name": "targetUtilization",
            "type": "f32"
          }
        ]
      }
    },
    {
      "name": "tokenLiqWithTokenLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "assetTokenIndex",
            "type": "u16"
          },
          {
            "name": "liabTokenIndex",
            "type": "u16"
          },
          {
            "name": "assetTransfer",
            "type": "i128"
          },
          {
            "name": "liabTransfer",
            "type": "i128"
          },
          {
            "name": "assetPrice",
            "type": "i128"
          },
          {
            "name": "liabPrice",
            "type": "i128"
          },
          {
            "name": "bankruptcy",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "tokenLiqWithTokenLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "assetTokenIndex",
            "type": "u16"
          },
          {
            "name": "liabTokenIndex",
            "type": "u16"
          },
          {
            "name": "assetTransferFromLiqee",
            "type": "i128"
          },
          {
            "name": "assetTransferToLiqor",
            "type": "i128"
          },
          {
            "name": "assetLiquidationFee",
            "type": "i128"
          },
          {
            "name": "liabTransfer",
            "type": "i128"
          },
          {
            "name": "assetPrice",
            "type": "i128"
          },
          {
            "name": "liabPrice",
            "type": "i128"
          },
          {
            "name": "bankruptcy",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "serum3OpenOrdersBalanceLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "baseTotal",
            "type": "u64"
          },
          {
            "name": "baseFree",
            "type": "u64"
          },
          {
            "name": "quoteTotal",
            "type": "u64"
          },
          {
            "name": "quoteFree",
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "serum3OpenOrdersBalanceLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "baseTotal",
            "type": "u64"
          },
          {
            "name": "baseFree",
            "type": "u64"
          },
          {
            "name": "quoteTotal",
            "type": "u64"
          },
          {
            "name": "quoteFree",
            "type": "u64"
          },
          {
            "name": "referrerRebatesAccrued",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawLoanOriginationFeeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "loanOriginationFee",
            "type": "i128"
          },
          {
            "name": "instruction",
            "type": {
              "defined": {
                "name": "loanOriginationFeeInstruction"
              }
            }
          }
        ]
      }
    },
    {
      "name": "withdrawLoanLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "loanAmount",
            "type": "i128"
          },
          {
            "name": "loanOriginationFee",
            "type": "i128"
          },
          {
            "name": "instruction",
            "type": {
              "defined": {
                "name": "loanOriginationFeeInstruction"
              }
            }
          },
          {
            "name": "price",
            "type": {
              "option": "i128"
            }
          }
        ]
      }
    },
    {
      "name": "tokenLiqBankruptcyLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liabTokenIndex",
            "type": "u16"
          },
          {
            "name": "initialLiabNative",
            "type": "i128"
          },
          {
            "name": "liabPrice",
            "type": "i128"
          },
          {
            "name": "insuranceTokenIndex",
            "type": "u16"
          },
          {
            "name": "insuranceTransfer",
            "type": "i128"
          },
          {
            "name": "socializedLoss",
            "type": "i128"
          },
          {
            "name": "startingLiabDepositIndex",
            "type": "i128"
          },
          {
            "name": "endingLiabDepositIndex",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "deactivateTokenPositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "cumulativeDepositInterest",
            "type": "f64"
          },
          {
            "name": "cumulativeBorrowInterest",
            "type": "f64"
          }
        ]
      }
    },
    {
      "name": "deactivatePerpPositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "cumulativeLongFunding",
            "type": "f64"
          },
          {
            "name": "cumulativeShortFunding",
            "type": "f64"
          },
          {
            "name": "makerVolume",
            "type": "u64"
          },
          {
            "name": "takerVolume",
            "type": "u64"
          },
          {
            "name": "perpSpotTransfers",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "tokenMetaDataLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "mintDecimals",
            "type": "u8"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "mintInfo",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "tokenMetaDataLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "mintDecimals",
            "type": "u8"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "fallbackOracle",
            "type": "pubkey"
          },
          {
            "name": "mintInfo",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "perpMarketMetaDataLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarket",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "baseDecimals",
            "type": "u8"
          },
          {
            "name": "baseLotSize",
            "type": "i64"
          },
          {
            "name": "quoteLotSize",
            "type": "i64"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "serum3RegisterMarketLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "serumMarket",
            "type": "pubkey"
          },
          {
            "name": "marketIndex",
            "type": "u16"
          },
          {
            "name": "baseTokenIndex",
            "type": "u16"
          },
          {
            "name": "quoteTokenIndex",
            "type": "u16"
          },
          {
            "name": "serumProgram",
            "type": "pubkey"
          },
          {
            "name": "serumProgramExternal",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "perpLiqBaseOrPositivePnlLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "baseTransfer",
            "type": "i64"
          },
          {
            "name": "quoteTransfer",
            "type": "i128"
          },
          {
            "name": "pnlTransfer",
            "type": "i128"
          },
          {
            "name": "pnlSettleLimitTransfer",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpLiqBaseOrPositivePnlLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "baseTransferLiqee",
            "type": "i64"
          },
          {
            "name": "quoteTransferLiqee",
            "type": "i128"
          },
          {
            "name": "quoteTransferLiqor",
            "type": "i128"
          },
          {
            "name": "quotePlatformFee",
            "type": "i128"
          },
          {
            "name": "pnlTransfer",
            "type": "i128"
          },
          {
            "name": "pnlSettleLimitTransfer",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpLiqBaseOrPositivePnlLogV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "baseTransferLiqee",
            "type": "i64"
          },
          {
            "name": "quoteTransferLiqee",
            "type": "i128"
          },
          {
            "name": "quoteTransferLiqor",
            "type": "i128"
          },
          {
            "name": "quotePlatformFee",
            "type": "i128"
          },
          {
            "name": "pnlTransfer",
            "type": "i128"
          },
          {
            "name": "pnlSettleLimitTransferRecurring",
            "type": "i64"
          },
          {
            "name": "pnlSettleLimitTransferOneshot",
            "type": "i64"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpLiqBankruptcyLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "insuranceTransfer",
            "type": "i128"
          },
          {
            "name": "socializedLoss",
            "type": "i128"
          },
          {
            "name": "startingLongFunding",
            "type": "i128"
          },
          {
            "name": "startingShortFunding",
            "type": "i128"
          },
          {
            "name": "endingLongFunding",
            "type": "i128"
          },
          {
            "name": "endingShortFunding",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpLiqNegativePnlOrBankruptcyLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "settlement",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpSettlePnlLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccountA",
            "type": "pubkey"
          },
          {
            "name": "mangoAccountB",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "settlement",
            "type": "i128"
          },
          {
            "name": "settler",
            "type": "pubkey"
          },
          {
            "name": "fee",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpSettleFeesLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "settlement",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "accountBuybackFeesWithMngoLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "buybackFees",
            "type": "i128"
          },
          {
            "name": "buybackMngo",
            "type": "i128"
          },
          {
            "name": "mngoBuybackPrice",
            "type": "i128"
          },
          {
            "name": "oraclePrice",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "filledPerpOrderLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "seqNum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "perpTakerTradeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "takerSide",
            "type": "u8"
          },
          {
            "name": "totalBaseLotsTaken",
            "type": "i64"
          },
          {
            "name": "totalBaseLotsDecremented",
            "type": "i64"
          },
          {
            "name": "totalQuoteLotsTaken",
            "type": "i64"
          },
          {
            "name": "totalQuoteLotsDecremented",
            "type": "i64"
          },
          {
            "name": "takerFeesPaid",
            "type": "i128"
          },
          {
            "name": "feePenalty",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "perpForceClosePositionLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "perpMarketIndex",
            "type": "u16"
          },
          {
            "name": "accountA",
            "type": "pubkey"
          },
          {
            "name": "accountB",
            "type": "pubkey"
          },
          {
            "name": "baseTransfer",
            "type": "i64"
          },
          {
            "name": "quoteTransfer",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "tokenForceCloseBorrowsWithTokenLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "assetTokenIndex",
            "type": "u16"
          },
          {
            "name": "liabTokenIndex",
            "type": "u16"
          },
          {
            "name": "assetTransfer",
            "type": "i128"
          },
          {
            "name": "liabTransfer",
            "type": "i128"
          },
          {
            "name": "assetPrice",
            "type": "i128"
          },
          {
            "name": "liabPrice",
            "type": "i128"
          },
          {
            "name": "feeFactor",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "tokenForceCloseBorrowsWithTokenLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "assetTokenIndex",
            "type": "u16"
          },
          {
            "name": "liabTokenIndex",
            "type": "u16"
          },
          {
            "name": "assetTransferFromLiqee",
            "type": "i128"
          },
          {
            "name": "assetTransferToLiqor",
            "type": "i128"
          },
          {
            "name": "assetLiquidationFee",
            "type": "i128"
          },
          {
            "name": "liabTransfer",
            "type": "i128"
          },
          {
            "name": "assetPrice",
            "type": "i128"
          },
          {
            "name": "liabPrice",
            "type": "i128"
          },
          {
            "name": "feeFactor",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapCreateLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "maxBuy",
            "type": "u64"
          },
          {
            "name": "maxSell",
            "type": "u64"
          },
          {
            "name": "expiryTimestamp",
            "type": "u64"
          },
          {
            "name": "priceLowerLimit",
            "type": "f64"
          },
          {
            "name": "priceUpperLimit",
            "type": "f64"
          },
          {
            "name": "pricePremiumRate",
            "type": "f64"
          },
          {
            "name": "takerFeeRate",
            "type": "f32"
          },
          {
            "name": "makerFeeRate",
            "type": "f32"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "allowCreatingDeposits",
            "type": "bool"
          },
          {
            "name": "allowCreatingBorrows",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapCreateLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "maxBuy",
            "type": "u64"
          },
          {
            "name": "maxSell",
            "type": "u64"
          },
          {
            "name": "expiryTimestamp",
            "type": "u64"
          },
          {
            "name": "priceLowerLimit",
            "type": "f64"
          },
          {
            "name": "priceUpperLimit",
            "type": "f64"
          },
          {
            "name": "pricePremiumRate",
            "type": "f64"
          },
          {
            "name": "takerFeeRate",
            "type": "f32"
          },
          {
            "name": "makerFeeRate",
            "type": "f32"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "allowCreatingDeposits",
            "type": "bool"
          },
          {
            "name": "allowCreatingBorrows",
            "type": "bool"
          },
          {
            "name": "displayPriceStyle",
            "type": "u8"
          },
          {
            "name": "intention",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapCreateLogV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "maxBuy",
            "type": "u64"
          },
          {
            "name": "maxSell",
            "type": "u64"
          },
          {
            "name": "expiryTimestamp",
            "type": "u64"
          },
          {
            "name": "priceLowerLimit",
            "type": "f64"
          },
          {
            "name": "priceUpperLimit",
            "type": "f64"
          },
          {
            "name": "pricePremiumRate",
            "type": "f64"
          },
          {
            "name": "takerFeeRate",
            "type": "f32"
          },
          {
            "name": "makerFeeRate",
            "type": "f32"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "allowCreatingDeposits",
            "type": "bool"
          },
          {
            "name": "allowCreatingBorrows",
            "type": "bool"
          },
          {
            "name": "displayPriceStyle",
            "type": "u8"
          },
          {
            "name": "intention",
            "type": "u8"
          },
          {
            "name": "tcsType",
            "type": "u8"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          },
          {
            "name": "durationSeconds",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapTriggerLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "tokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "buyAmount",
            "type": "u64"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "u64"
          },
          {
            "name": "buyTokenPrice",
            "type": "i128"
          },
          {
            "name": "sellTokenPrice",
            "type": "i128"
          },
          {
            "name": "closed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapTriggerLogV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "tokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "buyAmount",
            "type": "u64"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "u64"
          },
          {
            "name": "buyTokenPrice",
            "type": "i128"
          },
          {
            "name": "sellTokenPrice",
            "type": "i128"
          },
          {
            "name": "closed",
            "type": "bool"
          },
          {
            "name": "displayPriceStyle",
            "type": "u8"
          },
          {
            "name": "intention",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapTriggerLogV3",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "liqee",
            "type": "pubkey"
          },
          {
            "name": "liqor",
            "type": "pubkey"
          },
          {
            "name": "tokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "buyTokenIndex",
            "type": "u16"
          },
          {
            "name": "sellTokenIndex",
            "type": "u16"
          },
          {
            "name": "buyAmount",
            "type": "u64"
          },
          {
            "name": "sellAmount",
            "type": "u64"
          },
          {
            "name": "makerFee",
            "type": "u64"
          },
          {
            "name": "takerFee",
            "type": "u64"
          },
          {
            "name": "buyTokenPrice",
            "type": "i128"
          },
          {
            "name": "sellTokenPrice",
            "type": "i128"
          },
          {
            "name": "closed",
            "type": "bool"
          },
          {
            "name": "displayPriceStyle",
            "type": "u8"
          },
          {
            "name": "intention",
            "type": "u8"
          },
          {
            "name": "tcsType",
            "type": "u8"
          },
          {
            "name": "startTimestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapCancelLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "id",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenConditionalSwapStartLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "caller",
            "type": "pubkey"
          },
          {
            "name": "tokenConditionalSwapId",
            "type": "u64"
          },
          {
            "name": "incentiveTokenIndex",
            "type": "u16"
          },
          {
            "name": "incentiveAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenCollateralFeeLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "assetUsageFraction",
            "type": "i128"
          },
          {
            "name": "fee",
            "type": "i128"
          },
          {
            "name": "price",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "forceWithdrawLog",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mangoGroup",
            "type": "pubkey"
          },
          {
            "name": "mangoAccount",
            "type": "pubkey"
          },
          {
            "name": "tokenIndex",
            "type": "u16"
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "i128"
          },
          {
            "name": "toTokenAccount",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};

